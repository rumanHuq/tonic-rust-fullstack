use tonic::{transport::Server, Request, Response, Status};

use hello_world::greeter_server::{Greeter, GreeterServer};
use hello_world::{Reply as HelloReply, Request as HelloRequest};

pub mod hello_world {
  tonic::include_proto!("helloworld");
}

#[derive(Debug, Default)]
pub struct MyGreeter {}

#[tonic::async_trait]
impl Greeter for MyGreeter {
  async fn say_hello(&self, request: Request<HelloRequest>) -> Result<Response<HelloReply>, Status> {
    println!("Got a request: {:?}", request);

    let reply = hello_world::Reply {
      msg: format!("Hello {}!!", request.into_inner().title).into(),
    };

    println!("{:#?}", reply);

    Ok(Response::new(reply))
  }
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
  let addr = ([127, 0, 0, 1], 9999).into();
  let greeter = GreeterServer::new(MyGreeter::default());

  Server::builder()
    .accept_http1(true)
    .add_service(tonic_web::enable(greeter))
    .serve(addr)
    .await?;

  Ok(())
}
