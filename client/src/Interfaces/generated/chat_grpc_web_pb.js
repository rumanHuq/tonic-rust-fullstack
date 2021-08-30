/**
 * @fileoverview gRPC-Web generated client stub for chat
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.chat = require('./chat_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.chat.ChatClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.chat.ChatPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.User,
 *   !proto.chat.Message>}
 */
const methodDescriptor_Chat_Broadcast = new grpc.web.MethodDescriptor(
  '/chat.Chat/Broadcast',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.chat.User,
  proto.chat.Message,
  /**
   * @param {!proto.chat.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Message.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.chat.User,
 *   !proto.chat.Message>}
 */
const methodInfo_Chat_Broadcast = new grpc.web.AbstractClientBase.MethodInfo(
  proto.chat.Message,
  /**
   * @param {!proto.chat.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Message.deserializeBinary
);


/**
 * @param {!proto.chat.User} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.chat.Message>}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatClient.prototype.broadcast =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/chat.Chat/Broadcast',
      request,
      metadata || {},
      methodDescriptor_Chat_Broadcast);
};


/**
 * @param {!proto.chat.User} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.chat.Message>}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatPromiseClient.prototype.broadcast =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/chat.Chat/Broadcast',
      request,
      metadata || {},
      methodDescriptor_Chat_Broadcast);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.Message,
 *   !proto.chat.Empty>}
 */
const methodDescriptor_Chat_SendMessage = new grpc.web.MethodDescriptor(
  '/chat.Chat/SendMessage',
  grpc.web.MethodType.UNARY,
  proto.chat.Message,
  proto.chat.Empty,
  /**
   * @param {!proto.chat.Message} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.chat.Message,
 *   !proto.chat.Empty>}
 */
const methodInfo_Chat_SendMessage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.chat.Empty,
  /**
   * @param {!proto.chat.Message} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Empty.deserializeBinary
);


/**
 * @param {!proto.chat.Message} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.chat.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatClient.prototype.sendMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.Chat/SendMessage',
      request,
      metadata || {},
      methodDescriptor_Chat_SendMessage,
      callback);
};


/**
 * @param {!proto.chat.Message} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.Empty>}
 *     Promise that resolves to the response
 */
proto.chat.ChatPromiseClient.prototype.sendMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.Chat/SendMessage',
      request,
      metadata || {},
      methodDescriptor_Chat_SendMessage);
};


module.exports = proto.chat;

