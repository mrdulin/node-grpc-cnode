// package: reply
// file: reply/reply.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as share_user_pb from "../share/user_pb";

export class Reply extends jspb.Message { 
    getId(): string;
    setId(value: string): Reply;

    getContent(): string;
    setContent(value: string): Reply;


    hasCreateAt(): boolean;
    clearCreateAt(): void;
    getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): Reply;

    getReplyId(): string;
    setReplyId(value: string): Reply;


    hasAuthor(): boolean;
    clearAuthor(): void;
    getAuthor(): share_user_pb.UserBase | undefined;
    setAuthor(value?: share_user_pb.UserBase): Reply;

    getIsUped(): boolean;
    setIsUped(value: boolean): Reply;

    clearUpsList(): void;
    getUpsList(): Array<string>;
    setUpsList(value: Array<string>): Reply;
    addUps(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Reply.AsObject;
    static toObject(includeInstance: boolean, msg: Reply): Reply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Reply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Reply;
    static deserializeBinaryFromReader(message: Reply, reader: jspb.BinaryReader): Reply;
}

export namespace Reply {
    export type AsObject = {
        id: string,
        content: string,
        createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        replyId: string,
        author?: share_user_pb.UserBase.AsObject,
        isUped: boolean,
        upsList: Array<string>,
    }
}

export class RecentReply extends jspb.Message { 
    getId(): string;
    setId(value: string): RecentReply;

    getTitle(): string;
    setTitle(value: string): RecentReply;


    hasLastReplyAt(): boolean;
    clearLastReplyAt(): void;
    getLastReplyAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastReplyAt(value?: google_protobuf_timestamp_pb.Timestamp): RecentReply;


    hasAuthor(): boolean;
    clearAuthor(): void;
    getAuthor(): share_user_pb.UserBase | undefined;
    setAuthor(value?: share_user_pb.UserBase): RecentReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecentReply.AsObject;
    static toObject(includeInstance: boolean, msg: RecentReply): RecentReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecentReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecentReply;
    static deserializeBinaryFromReader(message: RecentReply, reader: jspb.BinaryReader): RecentReply;
}

export namespace RecentReply {
    export type AsObject = {
        id: string,
        title: string,
        lastReplyAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        author?: share_user_pb.UserBase.AsObject,
    }
}
