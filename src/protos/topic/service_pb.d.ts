// package: topic
// file: topic/service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as topic_topic_pb from "../topic/topic_pb";

export class ListTopicsRequest extends jspb.Message { 
    getPage(): number;
    setPage(value: number): ListTopicsRequest;

    getTab(): topic_topic_pb.Tab;
    setTab(value: topic_topic_pb.Tab): ListTopicsRequest;

    getLimit(): number;
    setLimit(value: number): ListTopicsRequest;

    getMdrender(): topic_topic_pb.Mdrender;
    setMdrender(value: topic_topic_pb.Mdrender): ListTopicsRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTopicsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTopicsRequest): ListTopicsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTopicsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTopicsRequest;
    static deserializeBinaryFromReader(message: ListTopicsRequest, reader: jspb.BinaryReader): ListTopicsRequest;
}

export namespace ListTopicsRequest {
    export type AsObject = {
        page: number,
        tab: topic_topic_pb.Tab,
        limit: number,
        mdrender: topic_topic_pb.Mdrender,
    }
}

export class ListTopicsResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<topic_topic_pb.Topic>;
    setDataList(value: Array<topic_topic_pb.Topic>): ListTopicsResponse;
    addData(value?: topic_topic_pb.Topic, index?: number): topic_topic_pb.Topic;

    getSuccess(): boolean;
    setSuccess(value: boolean): ListTopicsResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTopicsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListTopicsResponse): ListTopicsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTopicsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTopicsResponse;
    static deserializeBinaryFromReader(message: ListTopicsResponse, reader: jspb.BinaryReader): ListTopicsResponse;
}

export namespace ListTopicsResponse {
    export type AsObject = {
        dataList: Array<topic_topic_pb.Topic.AsObject>,
        success: boolean,
    }
}

export class GetTopicRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetTopicRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTopicRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTopicRequest): GetTopicRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTopicRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTopicRequest;
    static deserializeBinaryFromReader(message: GetTopicRequest, reader: jspb.BinaryReader): GetTopicRequest;
}

export namespace GetTopicRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetTopicResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): topic_topic_pb.Topic | undefined;
    setData(value?: topic_topic_pb.Topic): GetTopicResponse;

    getSuccess(): boolean;
    setSuccess(value: boolean): GetTopicResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTopicResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTopicResponse): GetTopicResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTopicResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTopicResponse;
    static deserializeBinaryFromReader(message: GetTopicResponse, reader: jspb.BinaryReader): GetTopicResponse;
}

export namespace GetTopicResponse {
    export type AsObject = {
        data?: topic_topic_pb.Topic.AsObject,
        success: boolean,
    }
}
