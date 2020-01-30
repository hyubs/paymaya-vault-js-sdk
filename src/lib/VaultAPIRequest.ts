import { HTTPRequest, IHTTPRequest } from ".";
import { KeyType } from "../types";
import IVaultAPIRequest from "./IVaultAPIRequest";

/**
 * A class for sending HTTP Requests to the PayMaya Vault API.
 */
class VaultAPIRequest implements IVaultAPIRequest {
  // TODO: Parameterize this
  public static readonly BASE_URL = "https://pg-sandbox.paymaya.com/payments/v1/";

  private publicAPIKey: string;
  private secretAPIKey: string;

  constructor(publicAPIKey: string, secretAPIKey: string) {
    this.publicAPIKey = publicAPIKey;
    this.secretAPIKey = secretAPIKey;
  }

  public getAuthorizationHeader(key: string) {
    const base64AuthToken = Buffer.from(key).toString("base64");
    return `Basic ${base64AuthToken}`;
  }

  public getAPIKey(keyType: KeyType) {
    return (keyType === "SECRET")
      ? this.secretAPIKey
      : this.publicAPIKey;
  }

  public getHTTPRequest(key: string): IHTTPRequest {
    return new HTTPRequest({
      authorization: this.getAuthorizationHeader(key),
      baseUrl: VaultAPIRequest.BASE_URL,
    });
  }

  public get(keyType: KeyType, uri: string, payload?: any) {
    const key = this.getAPIKey(keyType);
    const httpRequest = this.getHTTPRequest(key);
    return httpRequest.get(uri, payload);
  }

  public post(keyType: KeyType, uri: string, payload?: any) {
    const key = this.getAPIKey(keyType);
    const httpRequest = this.getHTTPRequest(key);
    return httpRequest.post(uri, payload);
  }

  public put(keyType: KeyType, uri: string, payload?: any) {
    const key = this.getAPIKey(keyType);
    const httpRequest = this.getHTTPRequest(key);
    return httpRequest.put(uri, payload);
  }

  public delete(keyType: KeyType, uri: string, payload?: any) {
    const key = this.getAPIKey(keyType);
    const httpRequest = this.getHTTPRequest(key);
    return httpRequest.delete(uri, payload);
  }
}

export default VaultAPIRequest;
