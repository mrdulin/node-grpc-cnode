// package: topic
// file: topic/service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as topic_service_pb from "../topic/service_pb";
import * as topic_topic_pb from "../topic/topic_pb";

interface ITopicServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getTopics: ITopicServiceService_IGetTopics;
    getTopicById: ITopicServiceService_IGetTopicById;
}

interface ITopicServiceService_IGetTopics extends grpc.MethodDefinition<topic_service_pb.GetTopicsRequest, topic_service_pb.GetTopicsResponse> {
    path: string; // "/topic.TopicService/GetTopics"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<topic_service_pb.GetTopicsRequest>;
    requestDeserialize: grpc.deserialize<topic_service_pb.GetTopicsRequest>;
    responseSerialize: grpc.serialize<topic_service_pb.GetTopicsResponse>;
    responseDeserialize: grpc.deserialize<topic_service_pb.GetTopicsResponse>;
}
interface ITopicServiceService_IGetTopicById extends grpc.MethodDefinition<topic_service_pb.GetTopicByIdRequest, topic_service_pb.GetTopicByIdResponse> {
    path: string; // "/topic.TopicService/GetTopicById"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<topic_service_pb.GetTopicByIdRequest>;
    requestDeserialize: grpc.deserialize<topic_service_pb.GetTopicByIdRequest>;
    responseSerialize: grpc.serialize<topic_service_pb.GetTopicByIdResponse>;
    responseDeserialize: grpc.deserialize<topic_service_pb.GetTopicByIdResponse>;
}

export const TopicServiceService: ITopicServiceService;

export interface ITopicServiceServer {
    getTopics: grpc.handleUnaryCall<topic_service_pb.GetTopicsRequest, topic_service_pb.GetTopicsResponse>;
    getTopicById: grpc.handleUnaryCall<topic_service_pb.GetTopicByIdRequest, topic_service_pb.GetTopicByIdResponse>;
}

export interface ITopicServiceClient {
    getTopics(request: topic_service_pb.GetTopicsRequest, callback: (error: grpc.ServiceError | null, response: topic_service_pb.GetTopicsResponse) => void): grpc.ClientUnaryCall;
    getTopics(request: topic_service_pb.GetTopicsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: topic_service_pb.GetTopicsResponse) => void): grpc.ClientUnaryCall;
    getTopics(request: topic_service_pb.GetTopicsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: topic_service_pb.GetTopicsResponse) => void): grpc.ClientUnaryCall;
    getTopicById(request: topic_service_pb.GetTopicByIdRequest, callback: (error: grpc.ServiceError | null, response: topic_service_pb.GetTopicByIdResponse) => void): grpc.ClientUnaryCall;
    getTopicById(request: topic_service_pb.GetTopicByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: topic_service_pb.GetTopicByIdResponse) => void): grpc.ClientUnaryCall;
    getTopicById(request: topic_service_pb.GetTopicByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: topic_service_pb.GetTopicByIdResponse) => void): grpc.ClientUnaryCall;
}

export class TopicServiceClient extends grpc.Client implements ITopicServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getTopics(request: topic_service_pb.GetTopicsRequest, callback: (error: grpc.ServiceError | null, response: topic_service_pb.GetTopicsResponse) => void): grpc.ClientUnaryCall;
    public getTopics(request: topic_service_pb.GetTopicsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: topic_service_pb.GetTopicsResponse) => void): grpc.ClientUnaryCall;
    public getTopics(request: topic_service_pb.GetTopicsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: topic_service_pb.GetTopicsResponse) => void): grpc.ClientUnaryCall;
    public getTopicById(request: topic_service_pb.GetTopicByIdRequest, callback: (error: grpc.ServiceError | null, response: topic_service_pb.GetTopicByIdResponse) => void): grpc.ClientUnaryCall;
    public getTopicById(request: topic_service_pb.GetTopicByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: topic_service_pb.GetTopicByIdResponse) => void): grpc.ClientUnaryCall;
    public getTopicById(request: topic_service_pb.GetTopicByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: topic_service_pb.GetTopicByIdResponse) => void): grpc.ClientUnaryCall;
}
