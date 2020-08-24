import grpc from 'grpc';
import { topic } from '../protos';
import { config } from '../config';
import { TopicServiceClient } from '../protos/topic/service_grpc_pb';

export enum ClientType {
  STATIC = 'static',
  DYNAMIC = 'dynamic',
}

export function createTopicServiceClient(type: ClientType) {
  const address = `${config.HOST}:${config.PORT}`;
  const channelCredentials = grpc.credentials.createInsecure();
  if (type === ClientType.DYNAMIC) {
    return new (topic as any).TopicService(address, channelCredentials);
  }
  return new TopicServiceClient(address, channelCredentials);
}
