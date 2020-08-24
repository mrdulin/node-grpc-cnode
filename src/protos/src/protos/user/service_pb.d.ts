// package: user
// file: src/protos/user/service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as src_protos_user_user_pb from "../../../src/protos/user/user_pb";

export class GetUserByLoginnameRequest extends jspb.Message { 
    getLoginname(): string;
    setLoginname(value: string): GetUserByLoginnameRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserByLoginnameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserByLoginnameRequest): GetUserByLoginnameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserByLoginnameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserByLoginnameRequest;
    static deserializeBinaryFromReader(message: GetUserByLoginnameRequest, reader: jspb.BinaryReader): GetUserByLoginnameRequest;
}

export namespace GetUserByLoginnameRequest {
    export type AsObject = {
        loginname: string,
    }
}

export class GetUserByLoginnameResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): src_protos_user_user_pb.UserDetail | undefined;
    setData(value?: src_protos_user_user_pb.UserDetail): GetUserByLoginnameResponse;

    getSuccess(): boolean;
    setSuccess(value: boolean): GetUserByLoginnameResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserByLoginnameResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserByLoginnameResponse): GetUserByLoginnameResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserByLoginnameResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserByLoginnameResponse;
    static deserializeBinaryFromReader(message: GetUserByLoginnameResponse, reader: jspb.BinaryReader): GetUserByLoginnameResponse;
}

export namespace GetUserByLoginnameResponse {
    export type AsObject = {
        data?: src_protos_user_user_pb.UserDetail.AsObject,
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
