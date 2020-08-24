import { ITopicServiceServer } from './service_grpc_pb';
import { getTopics } from './topicServiceImplDynamic';
import { GetTopicsRequest, GetTopicsResponse, GetTopicByIdRequest, GetTopicByIdResponse } from './service_pb';
import { ServerUnaryCall, sendUnaryData } from 'grpc';

export class TopicServiceImpl implements ITopicServiceServer {
  public getTopics(call: ServerUnaryCall<GetTopicsRequest>, callback: sendUnaryData<GetTopicsResponse>) {
    return getTopics(call, callback);
  }
  public getTopicById(call: ServerUnaryCall<GetTopicByIdRequest>, callback: sendUnaryData<GetTopicByIdResponse>) {
    return this.getTopicById(call, callback);
  }
}
