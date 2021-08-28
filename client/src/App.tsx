import * as grpcWeb from 'grpc-web'
import React from 'react'
import * as helloworldGrpcWebPb from './Interfaces/generated/helloworld_grpc_web_pb'
import * as helloworldPb from './Interfaces/generated/helloworld_pb'

const {GreeterClient} = helloworldGrpcWebPb
const {Request} = helloworldPb
const echoService = new GreeterClient('http://127.0.0.1:9999', null, null)

const request = new Request()
request.setTitle('Ruman')

const call = echoService.sayHello(request, {'custom-header-1': 'value1'}, (err: grpcWeb.Error, response: helloworldPb.Reply) => {
  console.log(response.getMsg())
})
call.on('status', (status: grpcWeb.Status) => {
  console.log(status)
})

export default function App() {
  return <div>hello</div>
}
