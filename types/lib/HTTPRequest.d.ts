import IHTTPRequest, { HTTPRequestOptions } from "./IHTTPRequest";
/**
 * A generic class for HTTP Requests.
 */
declare class HTTPRequest implements IHTTPRequest {
    private request;
    constructor({ authorization, baseUrl }: HTTPRequestOptions);
    get(uri: string, payload?: any): Promise<unknown>;
    post(uri: string, payload?: any): Promise<unknown>;
    put(uri: string, payload?: any): Promise<unknown>;
    delete(uri: string, payload?: any): Promise<unknown>;
}
export default HTTPRequest;
