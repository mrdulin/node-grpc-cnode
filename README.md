# node-grpc-cnode

![GitHub](https://img.shields.io/github/license/mrdulin/node-grpc-cnode)

A Node gRPC server for [CNode](https://cnodejs.org) community built on the top of [RESTful API](https://cnodejs.org/api).

_This project is just for teaching, NOT production ready._

Features:

- TypeScript support
- gRPC Health check
- Integration and unit testings

Compile protocol buffers:

```bash
npm run protoc
```

Start the server for development:

```bash
npm run dev
```

Run unit test:

```bash
npm run test:unit
```

Run integration test:

```bash
npm run test:int
```

## TODOs

It seems `grpc-node` package doesn't support following features:

- server interceptor, see [issue#419](https://github.com/grpc/grpc-node/issues/419)
- server reflection, see [issue#79](https://github.com/grpc/grpc-node/issues/79)
- middleware, see [issuecomment-254670533](https://github.com/grpc/grpc/issues/8394#issuecomment-254670533)

## References

- https://github.com/grpc/grpc-node
- https://www.npmjs.com/package/@grpc/proto-loader
- https://github.com/grpc/grpc/tree/master/examples/node
- https://developers.google.com/protocol-buffers/docs/proto3
- https://grpc.io/docs/quickstart/node.html
