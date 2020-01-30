"use strict";

var _api = require("./api");

var _lib = require("./lib");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class PayMayaVault {
  constructor(publicAPIKey, secretAPIKey, environment) {
    _defineProperty(this, "environment", void 0);

    _defineProperty(this, "publicAPIKey", void 0);

    _defineProperty(this, "secretAPIKey", void 0);

    this.publicAPIKey = publicAPIKey;
    this.secretAPIKey = secretAPIKey;
    this.environment = environment;
  }

  getPublicAPIKey() {
    return this.publicAPIKey;
  }

  getSecretAPIKey() {
    return this.secretAPIKey;
  }

  getEnvironment() {
    return this.environment;
  }

  paymentTokens() {
    return new _api.PaymentTokens(new _lib.VaultAPIRequest(this.getPublicAPIKey(), this.getSecretAPIKey()));
  }

}

module.exports = PayMayaVault;