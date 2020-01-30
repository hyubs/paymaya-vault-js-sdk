import { KeyType } from "../types";
interface IVaultAPIRequest {
    delete(keyType: KeyType, uri: string, payload?: any): Promise<unknown>;
    get(keyType: KeyType, uri: string, payload?: any): Promise<unknown>;
    getAPIKey(keyType: KeyType): string;
    post(keyType: KeyType, uri: string, payload?: any): Promise<unknown>;
    put(keyType: KeyType, uri: string, payload?: any): Promise<unknown>;
}
export default IVaultAPIRequest;
