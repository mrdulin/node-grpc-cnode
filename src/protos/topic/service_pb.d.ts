// package: topic
// file: topic/service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as topic_topic_pb from "../topic/topic_pb";

export class GetTopicsRequest extends jspb.Message { 
    getPage(): number;
    setPage(value: number): GetTopicsRequest;

    getTab(): topic_topic_pb.Tab;
    setTab(value: topic_topic_pb.Tab): GetTopicsRequest;

    getLimit(): number;
    setLimit(value: number): GetTopicsRequest;

    getMdrender(): topic_topic_pb.Mdrender;
    setMdrender(value: topic_topic_pb.Mdrender): GetTopicsRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTopicsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTopicsRequest): GetTopicsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTopicsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTopicsRequest;
    static deserializeBinaryFromReader(message: GetTopicsRequest, reader: jspb.BinaryReader): GetTopicsRequest;
}

export namespace GetTopicsRequest {
    export type AsObject = {
        page: number,
        tab: topic_topic_pb.Tab,
        limit: number,
        mdrender: topic_topic_pb.Mdrender,
    }
}

export class GetTopicsResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<topic_topic_pb.Topic>;
    setDataList(value: Array<topic_topic_pb.Topic>): GetTopicsResponse;
    addData(value?: topic_topic_pb.Topic, index?: number): topic_topic_pb.Topic;

    getSuccess(): boolean;
    setSuccess(value: boolean): GetTopicsResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTopicsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTopicsResponse): GetTopicsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTopicsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTopicsResponse;
    static deserializeBinaryFromReader(message: GetTopicsResponse, reader: jspb.BinaryReader): GetTopicsResponse;
}

export namespace GetTopicsResponse {
    export type AsObject = {
        dataList: Array<topic_topic_pb.Topic.AsObject>,
        success: boolean,
    }
}

export class GetTopicByIdRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetTopicByIdRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTopicByIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTopicByIdRequest): GetTopicByIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTopicByIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTopicByIdRequest;
    static deserializeBinaryFromReader(message: GetTopicByIdRequest, reader: jspb.BinaryReader): GetTopicByIdRequest;
}

export namespace GetTopicByIdRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetTopicByIdResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): topic_topic_pb.Topic | undefined;
    setData(value?: topic_topic_pb.Topic): GetTopicByIdResponse;

    getSuccess(): boolean;
    setSuccess(value: boolean): GetTopicByIdResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTopicByIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTopicByIdResponse): GetTopicByIdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTopicByIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTopicByIdResponse;
    static deserializeBinaryFromReader(message: GetTopicByIdResponse, reader: jspb.BinaryReader): GetTopicByIdResponse;
}

export namespace GetTopicByIdResponse {
    export type AsObject = {
        data?: topic_topic_pb.Topic.AsObject,
        success: boolean,
    }
}
