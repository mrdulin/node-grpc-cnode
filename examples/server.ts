import grpc, { handleUnaryCall } from 'grpc';
import faker from 'faker';

import { config } from './config';
import { UserProto } from './protos/user';

interface IUserSerivce {
  findById: handleUnaryCall<any, any>;
  findAll: handleUnaryCall<any, any>;
}

const users: any[] = [];
for (let i = 0; i < 1000; i++) {
  users.push({
    id: faker.random.uuid(),
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  });
}

const UserService: IUserSerivce = {
  findById(call, callback) {
    const user = {
      id: call.request.id,
      email: faker.internet.email(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    };
    callback(null, user);
  },
  findAll(call, callback) {
    callback(null, { users });
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
