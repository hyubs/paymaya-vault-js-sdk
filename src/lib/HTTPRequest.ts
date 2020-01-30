import Request from "request";
import IHTTPRequest, { HTTPRequestOptions } from "./IHTTPRequest";

type RequestAPI = Request.RequestAPI<Request.Request, Request.CoreOptions, Request.RequiredUriUrl>;

function responsePromiseCallback(
  resolve: (value?: unknown) => void,
  reject: (reason?: any) => void,
) {
  return function (
    error: any,
    _response: any,
    body: any,
  ) {
    if (error) {
      return reject(error);
    }

    return resolve(body);
  };
}

/**
 * A generic class for HTTP Requests.
 */
class HTTPRequest implements IHTTPRequest {
  private request: RequestAPI;

  constructor({ authorization, baseUrl }: HTTPRequestOptions) {
    this.request = Request.defaults({
      baseUrl: baseUrl,
      headers: {
        Authorization: authorization,
        "Content-Type": "application/json",
      },
      json: true,
    });
  }

  get(uri: string, payload?: any) {
    return new Promise((resolve, reject) => {
      const respCallback = responsePromiseCallback(resolve, reject);
      this.request.get(uri, payload, respCallback);
    });
  }

  post(uri: string, payload?: any) {
    const options = {
      body: payload,
    };

    return new Promise((resolve, reject) => {
      const respCallback = responsePromiseCallback(resolve, reject);
      this.request.post(uri, options, respCallback);
    });
  }

  put(uri: string, payload?: any) {
    const options = {
      body: payload,
    };

    return new Promise((resolve, reject) => {
      const respCallback = responsePromiseCallback(resolve, reject);
      this.request.put(uri, options, respCallback);
    });
  }

  delete(uri: string, payload?: any) {
    const options = {
      body: payload,
    };

    return new Promise((resolve, reject) => {
      const respCallback = responsePromiseCallback(resolve, reject);
      this.request.delete(uri, options, respCallback);
    });
  }
}

export default HTTPRequest;
