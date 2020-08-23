import grpc from 'grpc';
import { config } from './config';
import { topic, topicServiceImpl, user, userServiceImpl } from './protos';

function createServer() {
  const server = new grpc.Server();
  server.addService((topic as any).TopicService.service, topicServiceImpl);
  server.addService((user as any).UserService.service, userServiceImpl);
  server.bind(`${config.HOST}:${config.PORT}`, grpc.ServerCredentials.createInsecure());
  server.start();
  console.log(`Server is listening on http://${config.HOST}:${config.PORT}`);
  return server;
}

if (require.main === module) {
  createServer();
}

export { createServer };
