// package: topic
// file: topic/service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as topic_service_pb from "../topic/service_pb";
import * as topic_topic_pb from "../topic/topic_pb";

interface ITopicApiService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listTopics: ITopicApiService_IListTopics;
    getTopic: ITopicApiService_IGetTopic;
}

interface ITopicApiService_IListTopics extends grpc.MethodDefinition<topic_service_pb.ListTopicsRequest, topic_service_pb.ListTopicsResponse> {
    path: string; // "/topic.TopicApi/ListTopics"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<topic_service_pb.ListTopicsRequest>;
    requestDeserialize: grpc.deserialize<topic_service_pb.ListTopicsRequest>;
    responseSerialize: grpc.serialize<topic_service_pb.ListTopicsResponse>;
    responseDeserialize: grpc.deserialize<topic_service_pb.ListTopicsResponse>;
}
interface ITopicApiService_IGetTopic extends grpc.MethodDefinition<topic_service_pb.GetTopicRequest, topic_service_pb.GetTopicResponse> {
    path: string; // "/topic.TopicApi/GetTopic"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<topic_service_pb.GetTopicRequest>;
    requestDeserialize: grpc.deserialize<topic_service_pb.GetTopicRequest>;
    responseSerialize: grpc.serialize<topic_service_pb.GetTopicResponse>;
    responseDeserialize: grpc.deserialize<topic_service_pb.GetTopicResponse>;
}

export const TopicApiService: ITopicApiService;

export interface ITopicApiServer {
    listTopics: grpc.handleUnaryCall<topic_service_pb.ListTopicsRequest, topic_service_pb.ListTopicsResponse>;
    getTopic: grpc.handleUnaryCall<topic_service_pb.GetTopicRequest, topic_service_pb.GetTopicResponse>;
}

export interface ITopicApiClient {
    listTopics(request: topic_service_pb.ListTopicsRequest, callback: (error: grpc.ServiceError | null, response: topic_service_pb.ListTopicsResponse) => void): grpc.ClientUnaryCall;
    listTopics(request: topic_service_pb.ListTopicsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: topic_service_pb.ListTopicsResponse) => void): grpc.ClientUnaryCall;
    listTopics(request: topic_service_pb.ListTopicsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: topic_service_pb.ListTopicsResponse) => void): grpc.ClientUnaryCall;
    getTopic(request: topic_service_pb.GetTopicRequest, callback: (error: grpc.ServiceError | null, response: topic_service_pb.GetTopicResponse) => void): grpc.ClientUnaryCall;
    getTopic(request: topic_service_pb.GetTopicRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: topic_service_pb.GetTopicResponse) => void): grpc.ClientUnaryCall;
    getTopic(request: topic_service_pb.GetTopicRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: topic_service_pb.GetTopicResponse) => void): grpc.ClientUnaryCall;
}

export class TopicApiClient extends grpc.Client implements ITopicApiClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public listTopics(request: topic_service_pb.ListTopicsRequest, callback: (error: grpc.ServiceError | null, response: topic_service_pb.ListTopicsResponse) => void): grpc.ClientUnaryCall;
    public listTopics(request: topic_service_pb.ListTopicsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: topic_service_pb.ListTopicsResponse) => void): grpc.ClientUnaryCall;
    public listTopics(request: topic_service_pb.ListTopicsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: topic_service_pb.ListTopicsResponse) => void): grpc.ClientUnaryCall;
    public getTopic(request: topic_service_pb.GetTopicRequest, callback: (error: grpc.ServiceError | null, response: topic_service_pb.GetTopicResponse) => void): grpc.ClientUnaryCall;
    public getTopic(request: topic_service_pb.GetTopicRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: topic_service_pb.GetTopicResponse) => void): grpc.ClientUnaryCall;
    public getTopic(request: topic_service_pb.GetTopicRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: topic_service_pb.GetTopicResponse) => void): grpc.ClientUnaryCall;
}
