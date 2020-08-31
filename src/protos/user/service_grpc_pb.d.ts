// package: user
// file: user/service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as user_service_pb from "../user/service_pb";
import * as user_user_pb from "../user/user_pb";

interface IUserApiService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUser: IUserApiService_IGetUser;
    validateAccessToken: IUserApiService_IValidateAccessToken;
}

interface IUserApiService_IGetUser extends grpc.MethodDefinition<user_service_pb.GetUserRequest, user_service_pb.GetUserResponse> {
    path: string; // "/user.UserApi/GetUser"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_service_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<user_service_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<user_service_pb.GetUserResponse>;
    responseDeserialize: grpc.deserialize<user_service_pb.GetUserResponse>;
}
interface IUserApiService_IValidateAccessToken extends grpc.MethodDefinition<user_service_pb.ValidateAccessTokenRequest, user_service_pb.ValidateAccessTokenResponse> {
    path: string; // "/user.UserApi/ValidateAccessToken"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_service_pb.ValidateAccessTokenRequest>;
    requestDeserialize: grpc.deserialize<user_service_pb.ValidateAccessTokenRequest>;
    responseSerialize: grpc.serialize<user_service_pb.ValidateAccessTokenResponse>;
    responseDeserialize: grpc.deserialize<user_service_pb.ValidateAccessTokenResponse>;
}

export const UserApiService: IUserApiService;

export interface IUserApiServer {
    getUser: grpc.handleUnaryCall<user_service_pb.GetUserRequest, user_service_pb.GetUserResponse>;
    validateAccessToken: grpc.handleUnaryCall<user_service_pb.ValidateAccessTokenRequest, user_service_pb.ValidateAccessTokenResponse>;
}

export interface IUserApiClient {
    getUser(request: user_service_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: user_service_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: user_service_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_service_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: user_service_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_service_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    validateAccessToken(request: user_service_pb.ValidateAccessTokenRequest, callback: (error: grpc.ServiceError | null, response: user_service_pb.ValidateAccessTokenResponse) => void): grpc.ClientUnaryCall;
    validateAccessToken(request: user_service_pb.ValidateAccessTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_service_pb.ValidateAccessTokenResponse) => void): grpc.ClientUnaryCall;
    validateAccessToken(request: user_service_pb.ValidateAccessTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_service_pb.ValidateAccessTokenResponse) => void): grpc.ClientUnaryCall;
}

export class UserApiClient extends grpc.Client implements IUserApiClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getUser(request: user_service_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: user_service_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: user_service_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_service_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: user_service_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_service_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public validateAccessToken(request: user_service_pb.ValidateAccessTokenRequest, callback: (error: grpc.ServiceError | null, response: user_service_pb.ValidateAccessTokenResponse) => void): grpc.ClientUnaryCall;
    public validateAccessToken(request: user_service_pb.ValidateAccessTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_service_pb.ValidateAccessTokenResponse) => void): grpc.ClientUnaryCall;
    public validateAccessToken(request: user_service_pb.ValidateAccessTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_service_pb.ValidateAccessTokenResponse) => void): grpc.ClientUnaryCall;
}
