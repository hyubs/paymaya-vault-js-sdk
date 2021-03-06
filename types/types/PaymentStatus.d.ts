declare enum PaymentStatus {
    PENDING_PAYMENT = "PENDING_PAYMENT",
    FOR_AUTHENTICATION = "FOR_AUTHENTICATION",
    AUTHENTICATING = "AUTHENTICATING",
    AUTH_FAILED = "AUTH_FAILED",
    PAYMENT_PROCESSIING = "PAYMENT_PROCESSIING",
    PAYMENT_SUCCESS = "PAYMENT_SUCCESS",
    PAYMENT_FAILED = "PAYMENT_FAILED",
    PAYMENT_EXPIRED = "PAYMENT_EXPIRED",
    VOIDED = "VOIDED",
    REFUNDED = "REFUNDED"
}
export default PaymentStatus;
