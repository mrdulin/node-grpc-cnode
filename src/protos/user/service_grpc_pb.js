// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_service_pb = require('../user/service_pb.js');
var user_user_pb = require('../user/user_pb.js');

function serialize_user_GetUserByLoginnameRequest(arg) {
  if (!(arg instanceof user_service_pb.GetUserByLoginnameRequest)) {
    throw new Error('Expected argument of type user.GetUserByLoginnameRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_user_GetUserByLoginnameRequest(buffer_arg) {
  return user_service_pb.GetUserByLoginnameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_GetUserByLoginnameResponse(arg) {
  if (!(arg instanceof user_service_pb.GetUserByLoginnameResponse)) {
    throw new Error('Expected argument of type user.GetUserByLoginnameResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_user_GetUserByLoginnameResponse(buffer_arg) {
  return user_service_pb.GetUserByLoginnameResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


var UserServiceService = exports.UserServiceService = {
  getUserByLoginname: {
    path: '/user.UserService/GetUserByLoginname',
    requestStream: false,
    responseStream: false,
    requestType: user_service_pb.GetUserByLoginnameRequest,
    responseType: user_service_pb.GetUserByLoginnameResponse,
    requestSerialize: serialize_user_GetUserByLoginnameRequest,
    requestDeserialize: deserialize_user_GetUserByLoginnameRequest,
    responseSerialize: serialize_user_GetUserByLoginnameResponse,
    responseDeserialize: deserialize_user_GetUserByLoginnameResponse,
  },
  validateAccessToken: {
    path: '/user.UserService/ValidateAccessToken',
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

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
