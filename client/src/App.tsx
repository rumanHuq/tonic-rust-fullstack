import { GreeterClient } from "./Interfaces/generated/helloworld_grpc_web_pb";
import { Request } from "./Interfaces/generated/helloworld_pb";

const echoService = new GreeterClient("http://127.0.0.1:9999", null, null);

const request = new Request();
request.setTitle("Ruman");

const call = echoService.sayHello(request, { "custom-header-1": "value1" }, (_, response) => {
  console.log(response.getMsg());
});
call.on("status", (status) => {
  console.log(status);
});

export default function App() {
  return <div>hello!</div>;
}
