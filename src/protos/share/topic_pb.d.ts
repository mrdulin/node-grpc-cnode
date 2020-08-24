// package: share
// file: share/topic.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as share_user_pb from "../share/user_pb";

export class TopicBase extends jspb.Message { 
    getId(): string;
    setId(value: string): TopicBase;


    hasAuthor(): boolean;
    clearAuthor(): void;
    getAuthor(): share_user_pb.UserBase | undefined;
    setAuthor(value?: share_user_pb.UserBase): TopicBase;

    getTitle(): string;
    setTitle(value: string): TopicBase;

    getLastReplyAt(): string;
    setLastReplyAt(value: string): TopicBase;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TopicBase.AsObject;
    static toObject(includeInstance: boolean, msg: TopicBase): TopicBase.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TopicBase, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TopicBase;
    static deserializeBinaryFromReader(message: TopicBase, reader: jspb.BinaryReader): TopicBase;
}

export namespace TopicBase {
    export type AsObject = {
        id: string,
        author?: share_user_pb.UserBase.AsObject,
        title: string,
        lastReplyAt: string,
    }
}
