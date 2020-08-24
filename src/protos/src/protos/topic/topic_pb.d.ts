// package: topic
// file: src/protos/topic/topic.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as src_protos_share_user_pb from "../../../src/protos/share/user_pb";

export class Topic extends jspb.Message { 
    getId(): string;
    setId(value: string): Topic;

    getAuthorId(): string;
    setAuthorId(value: string): Topic;

    getTab(): Tab;
    setTab(value: Tab): Topic;

    getTitle(): string;
    setTitle(value: string): Topic;

    getContent(): string;
    setContent(value: string): Topic;


    hasAuthor(): boolean;
    clearAuthor(): void;
    getAuthor(): src_protos_share_user_pb.UserBase | undefined;
    setAuthor(value?: src_protos_share_user_pb.UserBase): Topic;

    getGood(): boolean;
    setGood(value: boolean): Topic;

    getTop(): boolean;
    setTop(value: boolean): Topic;

    getReplyCount(): number;
    setReplyCount(value: number): Topic;

    getVisitCount(): number;
    setVisitCount(value: number): Topic;

    getCreateAt(): string;
    setCreateAt(value: string): Topic;

    getLastReplyAt(): string;
    setLastReplyAt(value: string): Topic;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Topic.AsObject;
    static toObject(includeInstance: boolean, msg: Topic): Topic.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Topic, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Topic;
    static deserializeBinaryFromReader(message: Topic, reader: jspb.BinaryReader): Topic;
}

export namespace Topic {
    export type AsObject = {
        id: string,
        authorId: string,
        tab: Tab,
        title: string,
        content: string,
        author?: src_protos_share_user_pb.UserBase.AsObject,
        good: boolean,
        top: boolean,
        replyCount: number,
        visitCount: number,
        createAt: string,
        lastReplyAt: string,
    }
}

export enum Tab {
    SHARE = 0,
    ASK = 1,
    GOOD = 2,
    JOB = 3,
}
