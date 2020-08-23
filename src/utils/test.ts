import grpc from 'grpc';
import { topic } from '../protos';
import { config } from '../config';

export function createTopicServiceClient() {
  return new (topic as any).TopicService(`${config.HOST}:${config.PORT}`, grpc.credentials.createInsecure());
}
