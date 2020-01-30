import { IPaymentTokens } from "./api";

interface IPayMayaVault {
  getPublicAPIKey(): string;

  getSecretAPIKey(): string;

  getEnvironment(): string;

  paymentTokens(): IPaymentTokens;
}

export default IPayMayaVault;
