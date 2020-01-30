import { IHTTPRequest } from ".";
import { KeyType } from "../types";
import IVaultAPIRequest from "./IVaultAPIRequest";
/**
 * A class for sending HTTP Requests to the PayMaya Vault API.
 */
declare class VaultAPIRequest implements IVaultAPIRequest {
    static readonly BASE_URL = "https://pg-sandbox.paymaya.com/payments/v1/";
    private publicAPIKey;
    private secretAPIKey;
    constructor(publicAPIKey: string, secretAPIKey: string);
    getAuthorizationHeader(key: string): string;
    getAPIKey(keyType: KeyType): string;
    getHTTPRequest(key: string): IHTTPRequest;
    get(keyType: KeyType, uri: string, payload?: any): Promise<unknown>;
    post(keyType: KeyType, uri: string, payload?: any): Promise<unknown>;
    put(keyType: KeyType, uri: string, payload?: any): Promise<unknown>;
    delete(keyType: KeyType, uri: string, payload?: any): Promise<unknown>;
}
export default VaultAPIRequest;
