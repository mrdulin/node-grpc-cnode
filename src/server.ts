import grpc from 'grpc';
import { config } from './config';
import { topic, topicServiceImpl, TopicServiceImpl, user, userServiceImpl } from './protos';
import { ITopicServiceServer, TopicServiceService } from './protos/topic/service_grpc_pb';

function createServer() {
  const server = new grpc.Server();
  // dynamic
  // server.addService((topic as any).TopicService.service, topicServiceImpl);
  // server.addService((user as any).UserService.service, userServiceImpl);
  // static
  server.addService<ITopicServiceServer>(TopicServiceService, new TopicServiceImpl());
  server.bind(`${config.HOST}:${config.PORT}`, grpc.ServerCredentials.createInsecure());
  server.start();
  console.log(`Server is listening on http://${config.HOST}:${config.PORT}`);
  return server;
}

if (require.main === module) {
  createServer();
}

export { createServer };
