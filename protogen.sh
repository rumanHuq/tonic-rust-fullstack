#! /bin/bash

IN_DIR=proto
OUT_DIR=client/src/Interfaces/generated

rm -rf $OUT_DIR && mkdir -p $OUT_DIR && protoc -I=$IN_DIR helloworld.proto \
    --js_out=import_style=commonjs:$OUT_DIR \
    --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:$OUT_DIR
