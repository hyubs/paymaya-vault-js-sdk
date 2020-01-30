"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = require(".");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A class for sending HTTP Requests to the PayMaya Vault API.
 */
class VaultAPIRequest {
  // TODO: Parameterize this
  constructor(publicAPIKey, secretAPIKey) {
    _defineProperty(this, "publicAPIKey", void 0);

    _defineProperty(this, "secretAPIKey", void 0);

    this.publicAPIKey = publicAPIKey;
    this.secretAPIKey = secretAPIKey;
  }

  getAuthorizationHeader(key) {
    const base64AuthToken = Buffer.from(key).toString("base64");
    return `Basic ${base64AuthToken}`;
  }

  getAPIKey(keyType) {
    return keyType === "SECRET" ? this.secretAPIKey : this.publicAPIKey;
  }

  getHTTPRequest(key) {
    return new _.HTTPRequest({
      authorization: this.getAuthorizationHeader(key),
      baseUrl: VaultAPIRequest.BASE_URL
    });
  }

  get(keyType, uri, payload) {
    const key = this.getAPIKey(keyType);
    const httpRequest = this.getHTTPRequest(key);
    return httpRequest.get(uri, payload);
  }

  post(keyType, uri, payload) {
    const key = this.getAPIKey(keyType);
    const httpRequest = this.getHTTPRequest(key);
    return httpRequest.post(uri, payload);
  }

  put(keyType, uri, payload) {
    const key = this.getAPIKey(keyType);
    const httpRequest = this.getHTTPRequest(key);
    return httpRequest.put(uri, payload);
  }

  delete(keyType, uri, payload) {
    const key = this.getAPIKey(keyType);
    const httpRequest = this.getHTTPRequest(key);
    return httpRequest.delete(uri, payload);
  }

}

_defineProperty(VaultAPIRequest, "BASE_URL", "https://pg-sandbox.paymaya.com/payments/v1/");

var _default = VaultAPIRequest;
exports.default = _default;