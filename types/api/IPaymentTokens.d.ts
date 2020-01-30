import { Card } from "../types";
interface IPaymentTokens {
    create(card: Card): Promise<unknown>;
}
export default IPaymentTokens;
