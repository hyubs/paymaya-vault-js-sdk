export declare type HTTPRequestOptions = {
    authorization?: any;
    baseUrl?: string;
};
interface IHTTPRequest {
    get(uri: string, payload?: any): Promise<unknown>;
    post(uri: string, payload?: any): Promise<unknown>;
    put(uri: string, payload?: any): Promise<unknown>;
    delete(uri: string, payload?: any): Promise<unknown>;
}
export default IHTTPRequest;
