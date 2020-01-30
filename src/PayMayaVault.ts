import { PaymentTokens, IPaymentTokens } from "./api";
import { APIEnvironment } from "./types";
import { VaultAPIRequest } from "./lib";
import IPayMayaVault from "./IPayMayaVault";

/**
 * PayMaya Vault SDK
 */
class PayMayaVault implements IPayMayaVault {
  private environment: APIEnvironment;
  private publicAPIKey: string;
  private secretAPIKey: string;

  constructor(
    publicAPIKey: string,
    secretAPIKey: string,
    environment: APIEnvironment,
  ) {
    this.publicAPIKey = publicAPIKey;
    this.secretAPIKey = secretAPIKey;
    this.environment = environment;
  }

  public getPublicAPIKey(): string {
    return this.publicAPIKey;
  }

  public getSecretAPIKey(): string {
    return this.secretAPIKey;
  }

  public getEnvironment(): string {
    return this.environment;
  }

  public paymentTokens(): IPaymentTokens {
    return new PaymentTokens(
      new VaultAPIRequest(
        this.getPublicAPIKey(),
        this.getSecretAPIKey(),
      ),
    );
  }
}

export default PayMayaVault;
module.exports = PayMayaVault;
