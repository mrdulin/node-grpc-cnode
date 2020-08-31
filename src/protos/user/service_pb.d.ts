// package: user
// file: user/service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as user_user_pb from "../user/user_pb";

export class GetUserRequest extends jspb.Message { 
    getLoginname(): string;
    setLoginname(value: string): GetUserRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserRequest;
    static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
    export type AsObject = {
        loginname: string,
    }
}

export class GetUserResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): user_user_pb.UserDetail | undefined;
    setData(value?: user_user_pb.UserDetail): GetUserResponse;

    getSuccess(): boolean;
    setSuccess(value: boolean): GetUserResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserResponse): GetUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserResponse;
    static deserializeBinaryFromReader(message: GetUserResponse, reader: jspb.BinaryReader): GetUserResponse;
}

export namespace GetUserResponse {
    export type AsObject = {
        data?: user_user_pb.UserDetail.AsObject,
        success: boolean,
    }
}

export class ValidateAccessTokenRequest extends jspb.Message { 
    getAccesstoken(): string;
    setAccesstoken(value: string): ValidateAccessTokenRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateAccessTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateAccessTokenRequest): ValidateAccessTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateAccessTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateAccessTokenRequest;
    static deserializeBinaryFromReader(message: ValidateAccessTokenRequest, reader: jspb.BinaryReader): ValidateAccessTokenRequest;
}

export namespace ValidateAccessTokenRequest {
    export type AsObject = {
        accesstoken: string,
    }
}

export class ValidateAccessTokenResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): ValidateAccessTokenResponse;

    getLoginname(): string;
    setLoginname(value: string): ValidateAccessTokenResponse;

    getAvatarUrl(): string;
    setAvatarUrl(value: string): ValidateAccessTokenResponse;

    getSuccess(): boolean;
    setSuccess(value: boolean): ValidateAccessTokenResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateAccessTokenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateAccessTokenResponse): ValidateAccessTokenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateAccessTokenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateAccessTokenResponse;
    static deserializeBinaryFromReader(message: ValidateAccessTokenResponse, reader: jspb.BinaryReader): ValidateAccessTokenResponse;
}

export namespace ValidateAccessTokenResponse {
    export type AsObject = {
        id: string,
        loginname: string,
        avatarUrl: string,
        success: boolean,
    }
}
