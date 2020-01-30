"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _request = _interopRequireDefault(require("request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function responsePromiseCallback(resolve, reject) {
  return function (error, _response, body) {
    if (error) {
      return reject(error);
    }

    return resolve(body);
  };
}

class HTTPRequest {
  constructor({
    authorization,
    baseUrl
  }) {
    _defineProperty(this, "request", void 0);

    this.request = _request.default.defaults({
      baseUrl: baseUrl,
      headers: {
        Authorization: authorization,
        "Content-Type": "application/json"
      },
      json: true
    });
  }

  get(uri, payload) {
    return new Promise((resolve, reject) => {
      const respCallback = responsePromiseCallback(resolve, reject);
      this.request.get(uri, payload, respCallback);
    });
  }

  post(uri, payload) {
    const options = {
      body: payload
    };
    return new Promise((resolve, reject) => {
      const respCallback = responsePromiseCallback(resolve, reject);
      this.request.post(uri, options, respCallback);
    });
  }

  put(uri, payload) {
    const options = {
      body: payload
    };
    return new Promise((resolve, reject) => {
      const respCallback = responsePromiseCallback(resolve, reject);
      this.request.put(uri, options, respCallback);
    });
  }

  delete(uri, payload) {
    const options = {
      body: payload
    };
    return new Promise((resolve, reject) => {
      const respCallback = responsePromiseCallback(resolve, reject);
      this.request.delete(uri, options, respCallback);
    });
  }

}

var _default = HTTPRequest;
exports.default = _default;