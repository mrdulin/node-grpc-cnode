// package: share
// file: src/protos/share/user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class UserBase extends jspb.Message { 
    getLoginname(): string;
    setLoginname(value: string): UserBase;

    getAvatarUrl(): string;
    setAvatarUrl(value: string): UserBase;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserBase.AsObject;
    static toObject(includeInstance: boolean, msg: UserBase): UserBase.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserBase, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserBase;
    static deserializeBinaryFromReader(message: UserBase, reader: jspb.BinaryReader): UserBase;
}

export namespace UserBase {
    export type AsObject = {
        loginname: string,
        avatarUrl: string,
    }
}
