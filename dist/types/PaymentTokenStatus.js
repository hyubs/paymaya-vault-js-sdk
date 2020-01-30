"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var PaymentTokenStatus;

(function (PaymentTokenStatus) {
  PaymentTokenStatus["AVAILABLE"] = "AVAILABLE";
  PaymentTokenStatus["CURRENTLY_IN_USE"] = "CURRENTLY_IN_USE";
  PaymentTokenStatus["USED"] = "USED";
  PaymentTokenStatus["EXPIRED"] = "EXPIRED";
  PaymentTokenStatus["PREVERIFICATION"] = "PREVERIFICATION";
  PaymentTokenStatus["VERIFYING"] = "VERIFYING";
  PaymentTokenStatus["VERIFICATION_FAILED"] = "VERIFICATION_FAILED";
})(PaymentTokenStatus || (PaymentTokenStatus = {}));

var _default = PaymentTokenStatus;
exports.default = _default;