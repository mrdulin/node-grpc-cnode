// package: user
// file: user/service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as user_service_pb from "../user/service_pb";
import * as user_user_pb from "../user/user_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUserByLoginname: IUserServiceService_IGetUserByLoginname;
    validateAccessToken: IUserServiceService_IValidateAccessToken;
}

interface IUserServiceService_IGetUserByLoginname extends grpc.MethodDefinition<user_service_pb.GetUserByLoginnameRequest, user_service_pb.GetUserByLoginnameResponse> {
    path: string; // "/user.UserService/GetUserByLoginname"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_service_pb.GetUserByLoginnameRequest>;
    requestDeserialize: grpc.deserialize<user_service_pb.GetUserByLoginnameRequest>;
    responseSerialize: grpc.serialize<user_service_pb.GetUserByLoginnameResponse>;
    responseDeserialize: grpc.deserialize<user_service_pb.GetUserByLoginnameResponse>;
}
interface IUserServiceService_IValidateAccessToken extends grpc.MethodDefinition<user_service_pb.ValidateAccessTokenRequest, user_service_pb.ValidateAccessTokenResponse> {
    path: string; // "/user.UserService/ValidateAccessToken"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_service_pb.ValidateAccessTokenRequest>;
    requestDeserialize: grpc.deserialize<user_service_pb.ValidateAccessTokenRequest>;
    responseSerialize: grpc.serialize<user_service_pb.ValidateAccessTokenResponse>;
    responseDeserialize: grpc.deserialize<user_service_pb.ValidateAccessTokenResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer {
    getUserByLoginname: grpc.handleUnaryCall<user_service_pb.GetUserByLoginnameRequest, user_service_pb.GetUserByLoginnameResponse>;
    validateAccessToken: grpc.handleUnaryCall<user_service_pb.ValidateAccessTokenRequest, user_service_pb.ValidateAccessTokenResponse>;
}

export interface IUserServiceClient {
    getUserByLoginname(request: user_service_pb.GetUserByLoginnameRequest, callback: (error: grpc.ServiceError | null, response: user_service_pb.GetUserByLoginnameResponse) => void): grpc.ClientUnaryCall;
    getUserByLoginname(request: user_service_pb.GetUserByLoginnameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_service_pb.GetUserByLoginnameResponse) => void): grpc.ClientUnaryCall;
    getUserByLoginname(request: user_service_pb.GetUserByLoginnameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_service_pb.GetUserByLoginnameResponse) => void): grpc.ClientUnaryCall;
    validateAccessToken(request: user_service_pb.ValidateAccessTokenRequest, callback: (error: grpc.ServiceError | null, response: user_service_pb.ValidateAccessTokenResponse) => void): grpc.ClientUnaryCall;
    validateAccessToken(request: user_service_pb.ValidateAccessTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_service_pb.ValidateAccessTokenResponse) => void): grpc.ClientUnaryCall;
    validateAccessToken(request: user_service_pb.ValidateAccessTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_service_pb.ValidateAccessTokenResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getUserByLoginname(request: user_service_pb.GetUserByLoginnameRequest, callback: (error: grpc.ServiceError | null, response: user_service_pb.GetUserByLoginnameResponse) => void): grpc.ClientUnaryCall;
    public getUserByLoginname(request: user_service_pb.GetUserByLoginnameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_service_pb.GetUserByLoginnameResponse) => void): grpc.ClientUnaryCall;
    public getUserByLoginname(request: user_service_pb.GetUserByLoginnameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_service_pb.GetUserByLoginnameResponse) => void): grpc.ClientUnaryCall;
    public validateAccessToken(request: user_service_pb.ValidateAccessTokenRequest, callback: (error: grpc.ServiceError | null, response: user_service_pb.ValidateAccessTokenResponse) => void): grpc.ClientUnaryCall;
    public validateAccessToken(request: user_service_pb.ValidateAccessTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_service_pb.ValidateAccessTokenResponse) => void): grpc.ClientUnaryCall;
    public validateAccessToken(request: user_service_pb.ValidateAccessTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_service_pb.ValidateAccessTokenResponse) => void): grpc.ClientUnaryCall;
}
