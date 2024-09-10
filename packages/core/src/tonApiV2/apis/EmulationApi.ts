/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AccountEvent,
  DecodeMessageRequest,
  DecodedMessage,
  EmulateMessageToWalletRequest,
  Event,
  MessageConsequences,
  StatusDefaultResponse,
  Trace,
} from '../models/index';
import {
    AccountEventFromJSON,
    AccountEventToJSON,
    DecodeMessageRequestFromJSON,
    DecodeMessageRequestToJSON,
    DecodedMessageFromJSON,
    DecodedMessageToJSON,
    EmulateMessageToWalletRequestFromJSON,
    EmulateMessageToWalletRequestToJSON,
    EventFromJSON,
    EventToJSON,
    MessageConsequencesFromJSON,
    MessageConsequencesToJSON,
    StatusDefaultResponseFromJSON,
    StatusDefaultResponseToJSON,
    TraceFromJSON,
    TraceToJSON,
} from '../models/index';

export interface DecodeMessageOperationRequest {
    decodeMessageRequest: DecodeMessageRequest;
}

export interface EmulateMessageToAccountEventRequest {
    accountId: string;
    decodeMessageRequest: DecodeMessageRequest;
    acceptLanguage?: string;
    ignoreSignatureCheck?: boolean;
}

export interface EmulateMessageToEventRequest {
    decodeMessageRequest: DecodeMessageRequest;
    acceptLanguage?: string;
    ignoreSignatureCheck?: boolean;
}

export interface EmulateMessageToTraceRequest {
    decodeMessageRequest: DecodeMessageRequest;
    ignoreSignatureCheck?: boolean;
}

export interface EmulateMessageToWalletOperationRequest {
    emulateMessageToWalletRequest: EmulateMessageToWalletRequest;
    acceptLanguage?: string;
}

/**
 * EmulationApi - interface
 * 
 * @export
 * @interface EmulationApiInterface
 */
export interface EmulationApiInterface {
    /**
     * Decode a given message. Only external incoming messages can be decoded currently.
     * @param {DecodeMessageRequest} decodeMessageRequest bag-of-cells serialized to hex
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmulationApiInterface
     */
    decodeMessageRaw(requestParameters: DecodeMessageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DecodedMessage>>;

    /**
     * Decode a given message. Only external incoming messages can be decoded currently.
     */
    decodeMessage(requestParameters: DecodeMessageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DecodedMessage>;

    /**
     * Emulate sending message to blockchain
     * @param {string} accountId account ID
     * @param {DecodeMessageRequest} decodeMessageRequest bag-of-cells serialized to hex
     * @param {string} [acceptLanguage] 
     * @param {boolean} [ignoreSignatureCheck] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmulationApiInterface
     */
    emulateMessageToAccountEventRaw(requestParameters: EmulateMessageToAccountEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountEvent>>;

    /**
     * Emulate sending message to blockchain
     */
    emulateMessageToAccountEvent(requestParameters: EmulateMessageToAccountEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountEvent>;

    /**
     * Emulate sending message to blockchain
     * @param {DecodeMessageRequest} decodeMessageRequest bag-of-cells serialized to hex
     * @param {string} [acceptLanguage] 
     * @param {boolean} [ignoreSignatureCheck] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmulationApiInterface
     */
    emulateMessageToEventRaw(requestParameters: EmulateMessageToEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Event>>;

    /**
     * Emulate sending message to blockchain
     */
    emulateMessageToEvent(requestParameters: EmulateMessageToEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Event>;

    /**
     * Emulate sending message to blockchain
     * @param {DecodeMessageRequest} decodeMessageRequest bag-of-cells serialized to hex
     * @param {boolean} [ignoreSignatureCheck] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmulationApiInterface
     */
    emulateMessageToTraceRaw(requestParameters: EmulateMessageToTraceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Trace>>;

    /**
     * Emulate sending message to blockchain
     */
    emulateMessageToTrace(requestParameters: EmulateMessageToTraceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Trace>;

    /**
     * Emulate sending message to blockchain
     * @param {EmulateMessageToWalletRequest} emulateMessageToWalletRequest bag-of-cells serialized to base64/hex and additional parameters to configure emulation
     * @param {string} [acceptLanguage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmulationApiInterface
     */
    emulateMessageToWalletRaw(requestParameters: EmulateMessageToWalletOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MessageConsequences>>;

    /**
     * Emulate sending message to blockchain
     */
    emulateMessageToWallet(requestParameters: EmulateMessageToWalletOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageConsequences>;

}

/**
 * 
 */
export class EmulationApi extends runtime.BaseAPI implements EmulationApiInterface {

    /**
     * Decode a given message. Only external incoming messages can be decoded currently.
     */
    async decodeMessageRaw(requestParameters: DecodeMessageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DecodedMessage>> {
        if (requestParameters['decodeMessageRequest'] == null) {
            throw new runtime.RequiredError(
                'decodeMessageRequest',
                'Required parameter "decodeMessageRequest" was null or undefined when calling decodeMessage().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v2/message/decode`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DecodeMessageRequestToJSON(requestParameters['decodeMessageRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DecodedMessageFromJSON(jsonValue));
    }

    /**
     * Decode a given message. Only external incoming messages can be decoded currently.
     */
    async decodeMessage(requestParameters: DecodeMessageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DecodedMessage> {
        const response = await this.decodeMessageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Emulate sending message to blockchain
     */
    async emulateMessageToAccountEventRaw(requestParameters: EmulateMessageToAccountEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountEvent>> {
        if (requestParameters['accountId'] == null) {
            throw new runtime.RequiredError(
                'accountId',
                'Required parameter "accountId" was null or undefined when calling emulateMessageToAccountEvent().'
            );
        }

        if (requestParameters['decodeMessageRequest'] == null) {
            throw new runtime.RequiredError(
                'decodeMessageRequest',
                'Required parameter "decodeMessageRequest" was null or undefined when calling emulateMessageToAccountEvent().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['ignoreSignatureCheck'] != null) {
            queryParameters['ignore_signature_check'] = requestParameters['ignoreSignatureCheck'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['acceptLanguage'] != null) {
            headerParameters['Accept-Language'] = String(requestParameters['acceptLanguage']);
        }

        const response = await this.request({
            path: `/v2/accounts/{account_id}/events/emulate`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters['accountId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DecodeMessageRequestToJSON(requestParameters['decodeMessageRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountEventFromJSON(jsonValue));
    }

    /**
     * Emulate sending message to blockchain
     */
    async emulateMessageToAccountEvent(requestParameters: EmulateMessageToAccountEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountEvent> {
        const response = await this.emulateMessageToAccountEventRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Emulate sending message to blockchain
     */
    async emulateMessageToEventRaw(requestParameters: EmulateMessageToEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Event>> {
        if (requestParameters['decodeMessageRequest'] == null) {
            throw new runtime.RequiredError(
                'decodeMessageRequest',
                'Required parameter "decodeMessageRequest" was null or undefined when calling emulateMessageToEvent().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['ignoreSignatureCheck'] != null) {
            queryParameters['ignore_signature_check'] = requestParameters['ignoreSignatureCheck'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['acceptLanguage'] != null) {
            headerParameters['Accept-Language'] = String(requestParameters['acceptLanguage']);
        }

        const response = await this.request({
            path: `/v2/events/emulate`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DecodeMessageRequestToJSON(requestParameters['decodeMessageRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EventFromJSON(jsonValue));
    }

    /**
     * Emulate sending message to blockchain
     */
    async emulateMessageToEvent(requestParameters: EmulateMessageToEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Event> {
        const response = await this.emulateMessageToEventRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Emulate sending message to blockchain
     */
    async emulateMessageToTraceRaw(requestParameters: EmulateMessageToTraceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Trace>> {
        if (requestParameters['decodeMessageRequest'] == null) {
            throw new runtime.RequiredError(
                'decodeMessageRequest',
                'Required parameter "decodeMessageRequest" was null or undefined when calling emulateMessageToTrace().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['ignoreSignatureCheck'] != null) {
            queryParameters['ignore_signature_check'] = requestParameters['ignoreSignatureCheck'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v2/traces/emulate`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DecodeMessageRequestToJSON(requestParameters['decodeMessageRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TraceFromJSON(jsonValue));
    }

    /**
     * Emulate sending message to blockchain
     */
    async emulateMessageToTrace(requestParameters: EmulateMessageToTraceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Trace> {
        const response = await this.emulateMessageToTraceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Emulate sending message to blockchain
     */
    async emulateMessageToWalletRaw(requestParameters: EmulateMessageToWalletOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MessageConsequences>> {
        if (requestParameters['emulateMessageToWalletRequest'] == null) {
            throw new runtime.RequiredError(
                'emulateMessageToWalletRequest',
                'Required parameter "emulateMessageToWalletRequest" was null or undefined when calling emulateMessageToWallet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['acceptLanguage'] != null) {
            headerParameters['Accept-Language'] = String(requestParameters['acceptLanguage']);
        }

        const response = await this.request({
            path: `/v2/wallet/emulate`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EmulateMessageToWalletRequestToJSON(requestParameters['emulateMessageToWalletRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MessageConsequencesFromJSON(jsonValue));
    }

    /**
     * Emulate sending message to blockchain
     */
    async emulateMessageToWallet(requestParameters: EmulateMessageToWalletOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageConsequences> {
        const response = await this.emulateMessageToWalletRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
