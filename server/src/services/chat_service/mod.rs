pub mod chat {
  tonic::include_proto!("chat");
}
use chat::{chat_server::Chat, Empty, Message};
use std::{collections::HashMap, sync::Arc};
use tokio::sync::{mpsc, RwLock};
use tokio_stream::wrappers::ReceiverStream;
use tonic::{Request, Response, Status};

#[derive(Debug, Default)]
struct Connections {
  senders: HashMap<i32, mpsc::Sender<Message>>, /* <user_id i32, Message> */
}

impl Connections {
  async fn broadcast(&self, msg: Message) {
    for (user_id, tx) in &self.senders {
      match tx.send(msg.clone()).await {
        Ok(_) => {}
        Err(_) => {
          println!("[Broadcast] SendError: to {}, {:?}", user_id, msg)
        }
      }
    }
  }
}

#[derive(Debug, Default)]
pub struct ChatService {
  connections: Arc<RwLock<Connections>>,
}

#[tonic::async_trait]
impl Chat for ChatService {
  type BroadcastStream = ReceiverStream<Result<Message, Status>>;

  async fn broadcast(&self, request: Request<chat::User>) -> Result<Response<Self::BroadcastStream>, Status> {
    let (stream_tx, stream_rx) = mpsc::channel(1);
    let (tx, mut rx) = mpsc::channel(1);

    let user_id = request.into_inner().id;
    self.connections.write().await.senders.insert(user_id.clone(), tx);

    let connections_clone = self.connections.clone();

    tokio::spawn(async move {
      while let Some(msg) = rx.recv().await {
        match stream_tx.send(Ok(msg)).await {
          Ok(_) => {}
          Err(_) => {
            // If sending failed, then remove the user from shared data
            println!("[Remote] stream tx sending error. Remote {}", &user_id);
            connections_clone.write().await.senders.remove(&user_id);
          }
        }
      }
    });
    let result = Ok(Response::new(ReceiverStream::new(stream_rx)));
    result
  }
  async fn send_message(&self, request: Request<Message>) -> Result<Response<Empty>, Status> {
    let req_data = request.into_inner();
    let id = req_data.id;
    let content = req_data.content;
    let msg = Message { id, content };
    self.connections.read().await.broadcast(msg).await;

    Ok(Response::new(Empty {}))
  }
}
