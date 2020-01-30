import { IVaultAPIRequest } from "../lib";
import { Card } from "../types";
import IPaymentTokens from "./IPaymentTokens";

class PaymentTokens implements IPaymentTokens {
  private apiRequest: IVaultAPIRequest;

  constructor(apiRequest: IVaultAPIRequest) {
    this.apiRequest = apiRequest;
  }

  /**
   * This endpoint creates a payment token that represents your customer’s credit or debit card details which can be used for payments and customer card addition. The payment token is valid for a specific amount of time. Before it expires, it is valid for single use only in payment transactions.
   *
   * @param card Customer’s credit or debit card
   */
  public create(card: Card) {
    return this.apiRequest.post("PUBLIC", "payment-tokens", {
      card: {
        cvc: card.cvc,
        expMonth: card.expMonth,
        expYear: card.expYear,
        number: card.number,
      },
    });
  }
}

export default PaymentTokens;
