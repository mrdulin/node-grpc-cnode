// package: topic
// file: src/protos/topic/service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as src_protos_topic_service_pb from "../../../src/protos/topic/service_pb";
import * as src_protos_topic_topic_pb from "../../../src/protos/topic/topic_pb";

interface ITopicServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getTopics: ITopicServiceService_IGetTopics;
    getTopicById: ITopicServiceService_IGetTopicById;
}

interface ITopicServiceService_IGetTopics extends grpc.MethodDefinition<src_protos_topic_service_pb.GetTopicsRequest, src_protos_topic_service_pb.GetTopicsResponse> {
    path: string; // "/topic.TopicService/GetTopics"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_protos_topic_service_pb.GetTopicsRequest>;
    requestDeserialize: grpc.deserialize<src_protos_topic_service_pb.GetTopicsRequest>;
    responseSerialize: grpc.serialize<src_protos_topic_service_pb.GetTopicsResponse>;
    responseDeserialize: grpc.deserialize<src_protos_topic_service_pb.GetTopicsResponse>;
}
interface ITopicServiceService_IGetTopicById extends grpc.MethodDefinition<src_protos_topic_service_pb.GetTopicByIdRequest, src_protos_topic_service_pb.GetTopicByIdResponse> {
    path: string; // "/topic.TopicService/GetTopicById"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_protos_topic_service_pb.GetTopicByIdRequest>;
    requestDeserialize: grpc.deserialize<src_protos_topic_service_pb.GetTopicByIdRequest>;
    responseSerialize: grpc.serialize<src_protos_topic_service_pb.GetTopicByIdResponse>;
    responseDeserialize: grpc.deserialize<src_protos_topic_service_pb.GetTopicByIdResponse>;
}

export const TopicServiceService: ITopicServiceService;

export interface ITopicServiceServer {
    getTopics: grpc.handleUnaryCall<src_protos_topic_service_pb.GetTopicsRequest, src_protos_topic_service_pb.GetTopicsResponse>;
    getTopicById: grpc.handleUnaryCall<src_protos_topic_service_pb.GetTopicByIdRequest, src_protos_topic_service_pb.GetTopicByIdResponse>;
}

export interface ITopicServiceClient {
    getTopics(request: src_protos_topic_service_pb.GetTopicsRequest, callback: (error: grpc.ServiceError | null, response: src_protos_topic_service_pb.GetTopicsResponse) => void): grpc.ClientUnaryCall;
    getTopics(request: src_protos_topic_service_pb.GetTopicsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_protos_topic_service_pb.GetTopicsResponse) => void): grpc.ClientUnaryCall;
    getTopics(request: src_protos_topic_service_pb.GetTopicsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_protos_topic_service_pb.GetTopicsResponse) => void): grpc.ClientUnaryCall;
    getTopicById(request: src_protos_topic_service_pb.GetTopicByIdRequest, callback: (error: grpc.ServiceError | null, response: src_protos_topic_service_pb.GetTopicByIdResponse) => void): grpc.ClientUnaryCall;
    getTopicById(request: src_protos_topic_service_pb.GetTopicByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_protos_topic_service_pb.GetTopicByIdResponse) => void): grpc.ClientUnaryCall;
    getTopicById(request: src_protos_topic_service_pb.GetTopicByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_protos_topic_service_pb.GetTopicByIdResponse) => void): grpc.ClientUnaryCall;
}

export class TopicServiceClient extends grpc.Client implements ITopicServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getTopics(request: src_protos_topic_service_pb.GetTopicsRequest, callback: (error: grpc.ServiceError | null, response: src_protos_topic_service_pb.GetTopicsResponse) => void): grpc.ClientUnaryCall;
    public getTopics(request: src_protos_topic_service_pb.GetTopicsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_protos_topic_service_pb.GetTopicsResponse) => void): grpc.ClientUnaryCall;
    public getTopics(request: src_protos_topic_service_pb.GetTopicsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_protos_topic_service_pb.GetTopicsResponse) => void): grpc.ClientUnaryCall;
    public getTopicById(request: src_protos_topic_service_pb.GetTopicByIdRequest, callback: (error: grpc.ServiceError | null, response: src_protos_topic_service_pb.GetTopicByIdResponse) => void): grpc.ClientUnaryCall;
    public getTopicById(request: src_protos_topic_service_pb.GetTopicByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_protos_topic_service_pb.GetTopicByIdResponse) => void): grpc.ClientUnaryCall;
    public getTopicById(request: src_protos_topic_service_pb.GetTopicByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_protos_topic_service_pb.GetTopicByIdResponse) => void): grpc.ClientUnaryCall;
}
