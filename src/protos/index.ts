import grpc, { PackageDefinition, GrpcObject } from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

// import * as topicServiceImpl from './topic/topicServiceImplDynamic';
import { TopicServiceImpl } from './topic/topicServiceImpl';
import * as userServiceImpl from './user/userServiceImpl';

const PROTO_PATH = path.resolve(__dirname, './index.proto');

const packageDefinition: PackageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const grpcObject: GrpcObject = grpc.loadPackageDefinition(packageDefinition);
const { topic, user } = grpcObject;

export {
  topic,
  user,
  // topicServiceImpl,
  TopicServiceImpl,
  userServiceImpl,
};
