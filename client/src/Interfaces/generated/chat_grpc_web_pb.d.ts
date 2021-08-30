import * as grpcWeb from 'grpc-web';

import * as chat_pb from './chat_pb';


export class ChatClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  broadcast(
    request: chat_pb.User,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<chat_pb.Message>;

  sendMessage(
    request: chat_pb.Message,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: chat_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<chat_pb.Empty>;

}

export class ChatPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  broadcast(
    request: chat_pb.User,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<chat_pb.Message>;

  sendMessage(
    request: chat_pb.Message,
    metadata?: grpcWeb.Metadata
  ): Promise<chat_pb.Empty>;

}

