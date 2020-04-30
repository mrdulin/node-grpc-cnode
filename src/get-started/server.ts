import grpc, { handleUnaryCall } from 'grpc';
import faker from 'faker';

import { config } from './config';
import { UserProto } from './protos/user';

interface IUserSerivce {
  findById: handleUnaryCall<any, any>;
}

const UserService: IUserSerivce = {
  findById(call, callback) {
    const user = {
      user_id: call.request.user_id,
      user_name: faker.name.findName(),
      user_email: faker.internet.email(),
    };
    callback(null, user);
  },
};

function creatServer() {
  const server = new grpc.Server();
  server.addService((UserProto as any).UserServiceDefinition.service, UserService);
  server.bind(`${config.HOST}:${config.PORT}`, grpc.ServerCredentials.createInsecure());
  server.start();
  console.log(`Server is listening on http://${config.HOST}:${config.PORT}`);
}

creatServer();
