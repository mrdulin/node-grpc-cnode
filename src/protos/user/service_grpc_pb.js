// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_service_pb = require('../user/service_pb.js');
var user_user_pb = require('../user/user_pb.js');

function serialize_user_GetUserRequest(arg) {
  if (!(arg instanceof user_service_pb.GetUserRequest)) {
    throw new Error('Expected argument of type user.GetUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_user_GetUserRequest(buffer_arg) {
  return user_service_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_GetUserResponse(arg) {
  if (!(arg instanceof user_service_pb.GetUserResponse)) {
    throw new Error('Expected argument of type user.GetUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_user_GetUserResponse(buffer_arg) {
  return user_service_pb.GetUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_ValidateAccessTokenRequest(arg) {
  if (!(arg instanceof user_service_pb.ValidateAccessTokenRequest)) {
    throw new Error('Expected argument of type user.ValidateAccessTokenRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_user_ValidateAccessTokenRequest(buffer_arg) {
  return user_service_pb.ValidateAccessTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_ValidateAccessTokenResponse(arg) {
  if (!(arg instanceof user_service_pb.ValidateAccessTokenResponse)) {
    throw new Error('Expected argument of type user.ValidateAccessTokenResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_user_ValidateAccessTokenResponse(buffer_arg) {
  return user_service_pb.ValidateAccessTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserApiService = exports.UserApiService = {
  getUser: {
    path: '/user.UserApi/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: user_service_pb.GetUserRequest,
    responseType: user_service_pb.GetUserResponse,
    requestSerialize: serialize_user_GetUserRequest,
    requestDeserialize: deserialize_user_GetUserRequest,
    responseSerialize: serialize_user_GetUserResponse,
    responseDeserialize: deserialize_user_GetUserResponse,
  },
  validateAccessToken: {
    path: '/user.UserApi/ValidateAccessToken',
    requestStream: false,
    responseStream: false,
    requestType: user_service_pb.ValidateAccessTokenRequest,
    responseType: user_service_pb.ValidateAccessTokenResponse,
    requestSerialize: serialize_user_ValidateAccessTokenRequest,
    requestDeserialize: deserialize_user_ValidateAccessTokenRequest,
    responseSerialize: serialize_user_ValidateAccessTokenResponse,
    responseDeserialize: deserialize_user_ValidateAccessTokenResponse,
  },
};

exports.UserApiClient = grpc.makeGenericClientConstructor(UserApiService);
