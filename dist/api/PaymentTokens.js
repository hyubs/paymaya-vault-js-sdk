"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class PaymentTokens {
  constructor(apiRequest) {
    _defineProperty(this, "apiRequest", void 0);

    this.apiRequest = apiRequest;
  }
  /**
   * This endpoint creates a payment token that represents your customer’s credit or debit card details which can be used for payments and customer card addition. The payment token is valid for a specific amount of time. Before it expires, it is valid for single use only in payment transactions.
   *
   * @param card Customer’s credit or debit card
   */


  create(card) {
    return this.apiRequest.post("PUBLIC", "payment-tokens", {
      card: {
        cvc: card.cvc,
        expMonth: card.expMonth,
        expYear: card.expYear,
        number: card.number
      }
    });
  }

}

var _default = PaymentTokens;
exports.default = _default;