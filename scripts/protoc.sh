#!/bin/sh

protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --ts_out=./src/protos \
  -I ./src/protos \
  ./src/protos/*.proto