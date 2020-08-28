// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var topic_service_pb = require('../topic/service_pb.js');
var topic_topic_pb = require('../topic/topic_pb.js');

function serialize_topic_GetTopicByIdRequest(arg) {
  if (!(arg instanceof topic_service_pb.GetTopicByIdRequest)) {
    throw new Error('Expected argument of type topic.GetTopicByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_topic_GetTopicByIdRequest(buffer_arg) {
  return topic_service_pb.GetTopicByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_topic_GetTopicByIdResponse(arg) {
  if (!(arg instanceof topic_service_pb.GetTopicByIdResponse)) {
    throw new Error('Expected argument of type topic.GetTopicByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_topic_GetTopicByIdResponse(buffer_arg) {
  return topic_service_pb.GetTopicByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_topic_GetTopicsRequest(arg) {
  if (!(arg instanceof topic_service_pb.GetTopicsRequest)) {
    throw new Error('Expected argument of type topic.GetTopicsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_topic_GetTopicsRequest(buffer_arg) {
  return topic_service_pb.GetTopicsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_topic_GetTopicsResponse(arg) {
  if (!(arg instanceof topic_service_pb.GetTopicsResponse)) {
    throw new Error('Expected argument of type topic.GetTopicsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_topic_GetTopicsResponse(buffer_arg) {
  return topic_service_pb.GetTopicsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TopicServiceService = exports.TopicServiceService = {
  getTopics: {
    path: '/topic.TopicService/GetTopics',
    requestStream: false,
    responseStream: false,
    requestType: topic_service_pb.GetTopicsRequest,
    responseType: topic_service_pb.GetTopicsResponse,
    requestSerialize: serialize_topic_GetTopicsRequest,
    requestDeserialize: deserialize_topic_GetTopicsRequest,
    responseSerialize: serialize_topic_GetTopicsResponse,
    responseDeserialize: deserialize_topic_GetTopicsResponse,
  },
  getTopicById: {
    path: '/topic.TopicService/GetTopicById',
    requestStream: false,
    responseStream: false,
    requestType: topic_service_pb.GetTopicByIdRequest,
    responseType: topic_service_pb.GetTopicByIdResponse,
    requestSerialize: serialize_topic_GetTopicByIdRequest,
    requestDeserialize: deserialize_topic_GetTopicByIdRequest,
    responseSerialize: serialize_topic_GetTopicByIdResponse,
    responseDeserialize: deserialize_topic_GetTopicByIdResponse,
  },
};

exports.TopicServiceClient = grpc.makeGenericClientConstructor(TopicServiceService);
