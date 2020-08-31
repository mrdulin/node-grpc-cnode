// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var topic_service_pb = require('../topic/service_pb.js');
var topic_topic_pb = require('../topic/topic_pb.js');

function serialize_topic_GetTopicRequest(arg) {
  if (!(arg instanceof topic_service_pb.GetTopicRequest)) {
    throw new Error('Expected argument of type topic.GetTopicRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_topic_GetTopicRequest(buffer_arg) {
  return topic_service_pb.GetTopicRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_topic_GetTopicResponse(arg) {
  if (!(arg instanceof topic_service_pb.GetTopicResponse)) {
    throw new Error('Expected argument of type topic.GetTopicResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_topic_GetTopicResponse(buffer_arg) {
  return topic_service_pb.GetTopicResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_topic_ListTopicsRequest(arg) {
  if (!(arg instanceof topic_service_pb.ListTopicsRequest)) {
    throw new Error('Expected argument of type topic.ListTopicsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_topic_ListTopicsRequest(buffer_arg) {
  return topic_service_pb.ListTopicsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_topic_ListTopicsResponse(arg) {
  if (!(arg instanceof topic_service_pb.ListTopicsResponse)) {
    throw new Error('Expected argument of type topic.ListTopicsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_topic_ListTopicsResponse(buffer_arg) {
  return topic_service_pb.ListTopicsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TopicApiService = exports.TopicApiService = {
  listTopics: {
    path: '/topic.TopicApi/ListTopics',
    requestStream: false,
    responseStream: false,
    requestType: topic_service_pb.ListTopicsRequest,
    responseType: topic_service_pb.ListTopicsResponse,
    requestSerialize: serialize_topic_ListTopicsRequest,
    requestDeserialize: deserialize_topic_ListTopicsRequest,
    responseSerialize: serialize_topic_ListTopicsResponse,
    responseDeserialize: deserialize_topic_ListTopicsResponse,
  },
  getTopic: {
    path: '/topic.TopicApi/GetTopic',
    requestStream: false,
    responseStream: false,
    requestType: topic_service_pb.GetTopicRequest,
    responseType: topic_service_pb.GetTopicResponse,
    requestSerialize: serialize_topic_GetTopicRequest,
    requestDeserialize: deserialize_topic_GetTopicRequest,
    responseSerialize: serialize_topic_GetTopicResponse,
    responseDeserialize: deserialize_topic_GetTopicResponse,
  },
};

exports.TopicApiClient = grpc.makeGenericClientConstructor(TopicApiService);
