import grpc from 'grpc';
import { config } from './config';
import { topic, topicServiceImpl } from './protos';

function creatServer() {
  const server = new grpc.Server();
  server.addService((topic as any).TopicService.service, topicServiceImpl);
  server.bind(`${config.HOST}:${config.PORT}`, grpc.ServerCredentials.createInsecure());
  server.start();
  console.log(`Server is listening on http://${config.HOST}:${config.PORT}`);
}

creatServer();
