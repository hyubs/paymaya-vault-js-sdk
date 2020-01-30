import { expect } from "chai";
import { IPaymentTokens } from "../src/api";
import IPayMayaVault from "../src/IPayMayaVault";
import PayMayaVault from "../src/PayMayaVault";

const PUBLIC_API_KEY = "pk-Z0OSzLvIcOI2UIvDhdTGVVfRSSeiGStnceqwUE7n0Ah";
const SECRET_API_KEY = "sk-X8qolYjy62kIzEbr0QRK1h4b4KDVHaNcwMYk39jInSl";

describe('PayMayaVault', () => {
  let paymayaVault: IPayMayaVault;

  beforeEach(() => {
    paymayaVault = new PayMayaVault(PUBLIC_API_KEY, SECRET_API_KEY, "SANDBOX");
  });

  describe('getPublicAPIKey', () => {
    it('should return the public API key', () => {
      expect(paymayaVault.getPublicAPIKey()).to.be.equal(PUBLIC_API_KEY);
    });
  });

  describe('getSecretAPIKey', () => {
    it('should return the secret API key', () => {
      expect(paymayaVault.getSecretAPIKey()).to.be.equal(SECRET_API_KEY);
    });
  });

  describe('getEnvironment', () => {
    it('should return the environment', () => {
      expect(paymayaVault.getEnvironment()).to.be.equal("SANDBOX");
    });
  });

  describe('paymentTokens', () => {
    it('should return an object', () => {
      expect(paymayaVault.paymentTokens()).to.be.instanceof(Object);
    });
  });
});
