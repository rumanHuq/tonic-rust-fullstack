mod services;
use services::chat_service::{chat::chat_server::ChatServer, ChatService};
use tonic::transport::Server;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
  let addr = ([127, 0, 0, 1], 9999).into();

  let chat_svc = ChatServer::new(ChatService::default());

  Server::builder()
    .accept_http1(true)
    .add_service(tonic_web::enable(chat_svc))
    .serve(addr)
    .await?;

  Ok(())
}
