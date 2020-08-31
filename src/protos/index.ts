import * as protoLoader from '@grpc/proto-loader';
import grpc, { GrpcObject, PackageDefinition } from 'grpc';
import path from 'path';

// For dynamic code generation
import * as topicServiceImpl from './topic/topicServiceImplDynamic';
import * as userServiceImpl from './user/userServiceImplDynamic';

const PROTO_PATH = path.resolve(__dirname, './index.proto');

const packageDefinition: PackageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
  includeDirs: [__dirname],
});
const grpcObject: GrpcObject = grpc.loadPackageDefinition(packageDefinition);
const { topic, user } = grpcObject;

export { topic, user, topicServiceImpl, userServiceImpl };
