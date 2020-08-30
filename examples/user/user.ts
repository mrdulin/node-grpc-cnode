import grpc, { PackageDefinition, GrpcObject } from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

const PROTO_PATH = path.resolve(__dirname, './user.proto');

const packageDefinition: PackageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});
const grpcObject: GrpcObject = grpc.loadPackageDefinition(packageDefinition);
const UserProto = grpcObject.user;

export { UserProto };
