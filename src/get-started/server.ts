import grpc from 'grpc';
import faker from 'faker';

import { config } from './config';
import { UserProto } from './protos/user';

const UserService = {
  findById(call, callback) {
    const user = {
      user_id: call.request.user_id,
      user_name: faker.name.findName(),
      user_email: faker.internet.email()
    };
    callback(null, user);
  }
};

function creatServer() {
  const server = new grpc.Server();
  server.addService((UserProto as any).UserService.service, UserService);
  server.bind(`${config.HOST}:${config.PORT}`, grpc.ServerCredentials.createInsecure());
  server.start();
}

creatServer();
