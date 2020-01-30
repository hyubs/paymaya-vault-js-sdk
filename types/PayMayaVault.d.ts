import { IPaymentTokens } from "./api";
import { APIEnvironment } from "./types";
import IPayMayaVault from "./IPayMayaVault";
/**
 * PayMaya Vault SDK
 */
declare class PayMayaVault implements IPayMayaVault {
    private environment;
    private publicAPIKey;
    private secretAPIKey;
    constructor(publicAPIKey: string, secretAPIKey: string, environment: APIEnvironment);
    getPublicAPIKey(): string;
    getSecretAPIKey(): string;
    getEnvironment(): string;
    paymentTokens(): IPaymentTokens;
}
export default PayMayaVault;
