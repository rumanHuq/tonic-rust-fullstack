import { useEffect } from "react";
import { ChatClient } from "./Interfaces/generated/chat_grpc_web_pb";
import { User, Message } from "./Interfaces/generated/chat_pb";

const echoService = new ChatClient("http://127.0.0.1:9999", null, null);

const message = new Message();
message.setId(1);
message.setContent("hello");

const user = new User();
user.setId(1);
user.setName("Ruman");

const call = echoService.broadcast(user);
call.on("status", (status) => {
  console.log(status);
});

call.on("data", (r) => {
  console.log(r.toObject());
});

export default function App() {
  useEffect(() => {
    echoService.sendMessage(message, undefined, () => {
      /*  */
    });
  });
  return <div>hello!</div>;
}
