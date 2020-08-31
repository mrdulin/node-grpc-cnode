import grpc from 'grpc';
import { config } from './config';
// dynamic codegen
// import { topic, topicServiceImpl, user, userServiceImpl } from './protos';
// static codegen
import { TopicServiceImpl } from './protos/topic/topicServiceImpl';
import { UserServiceImpl } from './protos/user/userServiceImpl';
import { ITopicApiServer, TopicApiService } from './protos/topic/service_grpc_pb';
import { IUserApiServer, UserApiService } from './protos/user/service_grpc_pb';
// TODO: type-safe
// tslint:disable-next-line: no-var-requires
const health = require('grpc-health-check');
// tslint:disable-next-line: no-var-requires
const healthPB = require('grpc-health-check/v1/health_pb');

function createServer() {
  const server = new grpc.Server();
  // dynamic
  // server.addService((topic as any).TopicService.service, topicServiceImpl);
  // server.addService((user as any).UserService.service, userServiceImpl);
  // static
  server.addService<ITopicApiServer>(TopicApiService, new TopicServiceImpl());
  server.addService<IUserApiServer>(UserApiService, new UserServiceImpl());

  const statusMap = {
    'user.UserApi': healthPB.HealthCheckResponse.ServingStatus.SERVING,
    'topic.TopicApi': healthPB.HealthCheckResponse.ServingStatus.SERVING,
    '': healthPB.HealthCheckResponse.ServingStatus.SERVING,
  };
  const healthImpl = new health.Implementation(statusMap);
  server.addService(health.service, healthImpl);

  server.bind(`${config.HOST}:${config.PORT}`, grpc.ServerCredentials.createInsecure());
  server.start();
  console.log(`Server is listening on http://${config.HOST}:${config.PORT}`);
  return server;
}

if (require.main === module) {
  createServer();
}

export { createServer };
