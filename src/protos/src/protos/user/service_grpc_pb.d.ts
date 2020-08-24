// package: user
// file: src/protos/user/service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as src_protos_user_service_pb from "../../../src/protos/user/service_pb";
import * as src_protos_user_user_pb from "../../../src/protos/user/user_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUserByLoginname: IUserServiceService_IGetUserByLoginname;
    validateAccessToken: IUserServiceService_IValidateAccessToken;
}

interface IUserServiceService_IGetUserByLoginname extends grpc.MethodDefinition<src_protos_user_service_pb.GetUserByLoginnameRequest, src_protos_user_service_pb.GetUserByLoginnameResponse> {
    path: string; // "/user.UserService/GetUserByLoginname"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_protos_user_service_pb.GetUserByLoginnameRequest>;
    requestDeserialize: grpc.deserialize<src_protos_user_service_pb.GetUserByLoginnameRequest>;
    responseSerialize: grpc.serialize<src_protos_user_service_pb.GetUserByLoginnameResponse>;
    responseDeserialize: grpc.deserialize<src_protos_user_service_pb.GetUserByLoginnameResponse>;
}
interface IUserServiceService_IValidateAccessToken extends grpc.MethodDefinition<src_protos_user_service_pb.ValidateAccessTokenRequest, src_protos_user_service_pb.ValidateAccessTokenResponse> {
    path: string; // "/user.UserService/ValidateAccessToken"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_protos_user_service_pb.ValidateAccessTokenRequest>;
    requestDeserialize: grpc.deserialize<src_protos_user_service_pb.ValidateAccessTokenRequest>;
    responseSerialize: grpc.serialize<src_protos_user_service_pb.ValidateAccessTokenResponse>;
    responseDeserialize: grpc.deserialize<src_protos_user_service_pb.ValidateAccessTokenResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer {
    getUserByLoginname: grpc.handleUnaryCall<src_protos_user_service_pb.GetUserByLoginnameRequest, src_protos_user_service_pb.GetUserByLoginnameResponse>;
    validateAccessToken: grpc.handleUnaryCall<src_protos_user_service_pb.ValidateAccessTokenRequest, src_protos_user_service_pb.ValidateAccessTokenResponse>;
}

export interface IUserServiceClient {
    getUserByLoginname(request: src_protos_user_service_pb.GetUserByLoginnameRequest, callback: (error: grpc.ServiceError | null, response: src_protos_user_service_pb.GetUserByLoginnameResponse) => void): grpc.ClientUnaryCall;
    getUserByLoginname(request: src_protos_user_service_pb.GetUserByLoginnameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_protos_user_service_pb.GetUserByLoginnameResponse) => void): grpc.ClientUnaryCall;
    getUserByLoginname(request: src_protos_user_service_pb.GetUserByLoginnameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_protos_user_service_pb.GetUserByLoginnameResponse) => void): grpc.ClientUnaryCall;
    validateAccessToken(request: src_protos_user_service_pb.ValidateAccessTokenRequest, callback: (error: grpc.ServiceError | null, response: src_protos_user_service_pb.ValidateAccessTokenResponse) => void): grpc.ClientUnaryCall;
    validateAccessToken(request: src_protos_user_service_pb.ValidateAccessTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_protos_user_service_pb.ValidateAccessTokenResponse) => void): grpc.ClientUnaryCall;
    validateAccessToken(request: src_protos_user_service_pb.ValidateAccessTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_protos_user_service_pb.ValidateAccessTokenResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getUserByLoginname(request: src_protos_user_service_pb.GetUserByLoginnameRequest, callback: (error: grpc.ServiceError | null, response: src_protos_user_service_pb.GetUserByLoginnameResponse) => void): grpc.ClientUnaryCall;
    public getUserByLoginname(request: src_protos_user_service_pb.GetUserByLoginnameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_protos_user_service_pb.GetUserByLoginnameResponse) => void): grpc.ClientUnaryCall;
    public getUserByLoginname(request: src_protos_user_service_pb.GetUserByLoginnameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_protos_user_service_pb.GetUserByLoginnameResponse) => void): grpc.ClientUnaryCall;
    public validateAccessToken(request: src_protos_user_service_pb.ValidateAccessTokenRequest, callback: (error: grpc.ServiceError | null, response: src_protos_user_service_pb.ValidateAccessTokenResponse) => void): grpc.ClientUnaryCall;
    public validateAccessToken(request: src_protos_user_service_pb.ValidateAccessTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_protos_user_service_pb.ValidateAccessTokenResponse) => void): grpc.ClientUnaryCall;
    public validateAccessToken(request: src_protos_user_service_pb.ValidateAccessTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_protos_user_service_pb.ValidateAccessTokenResponse) => void): grpc.ClientUnaryCall;
}
