import grpc from 'grpc';
import { topic, user } from '../protos';
import { config } from '../config';
import { TopicApiClient } from '../protos/topic/service_grpc_pb';
import { UserApiClient } from '../protos/user/service_grpc_pb';
import health from 'grpc-health-check';

export enum ClientType {
  STATIC = 'static',
  DYNAMIC = 'dynamic',
}

const address = `${config.HOST}:${config.PORT}`;
const channelCredentials = grpc.credentials.createInsecure();

export function createTopicServiceClient(type: ClientType) {
  if (type === ClientType.DYNAMIC) {
    return new (topic as any).TopicService(address, channelCredentials);
  }
  return new TopicApiClient(address, channelCredentials);
}

export function createUserServiceClient(type: ClientType) {
  if (type === ClientType.DYNAMIC) {
    return new (user as any).UserService(address, channelCredentials);
  }
  return new UserApiClient(address, channelCredentials);
}

export function createHealthCheckClient() {
  return new health.Client(address, channelCredentials);
}
