"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var PaymentStatus;

(function (PaymentStatus) {
  PaymentStatus["PENDING_PAYMENT"] = "PENDING_PAYMENT";
  PaymentStatus["FOR_AUTHENTICATION"] = "FOR_AUTHENTICATION";
  PaymentStatus["AUTHENTICATING"] = "AUTHENTICATING";
  PaymentStatus["AUTH_FAILED"] = "AUTH_FAILED";
  PaymentStatus["PAYMENT_PROCESSIING"] = "PAYMENT_PROCESSIING";
  PaymentStatus["PAYMENT_SUCCESS"] = "PAYMENT_SUCCESS";
  PaymentStatus["PAYMENT_FAILED"] = "PAYMENT_FAILED";
  PaymentStatus["PAYMENT_EXPIRED"] = "PAYMENT_EXPIRED";
  PaymentStatus["VOIDED"] = "VOIDED";
  PaymentStatus["REFUNDED"] = "REFUNDED";
})(PaymentStatus || (PaymentStatus = {}));

var _default = PaymentStatus;
exports.default = _default;