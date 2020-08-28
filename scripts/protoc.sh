#!/bin/sh

grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:./src/protos \
  --grpc_out=./src/protos \
  --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
  -I ./src/protos \
  ./src/protos/**/*.proto

protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --ts_out=./src/protos \
  -I ./src/protos \
  ./src/protos/**/*.proto