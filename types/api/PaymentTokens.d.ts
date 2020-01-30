import { IVaultAPIRequest } from "../lib";
import { Card } from "../types";
import IPaymentTokens from "./IPaymentTokens";
declare class PaymentTokens implements IPaymentTokens {
    private apiRequest;
    constructor(apiRequest: IVaultAPIRequest);
    /**
     * This endpoint creates a payment token that represents your customer’s credit or debit card details which can be used for payments and customer card addition. The payment token is valid for a specific amount of time. Before it expires, it is valid for single use only in payment transactions.
     *
     * @param card Customer’s credit or debit card
     */
    create(card: Card): Promise<unknown>;
}
export default PaymentTokens;
