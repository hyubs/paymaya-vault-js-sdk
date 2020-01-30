import { expect } from "chai";
import sinon from "sinon";
import { PaymentTokens } from "../../src/api";
import { Card } from "../../src/types";

describe("api", () => {
  describe("PaymentTokens", () => {
    let paymentToken: PaymentTokens;
    let vaultAPIRequest: {
      delete: sinon.SinonSpy,
      get: sinon.SinonSpy,
      getAPIKey: sinon.SinonSpy,
      post: sinon.SinonSpy,
      put: sinon.SinonSpy,
    };

    beforeEach(() => {
      vaultAPIRequest = {
        delete: sinon.spy(),
        get: sinon.spy(),
        getAPIKey: sinon.spy(),
        post: sinon.spy(),
        put: sinon.spy(),
      };

      paymentToken = new PaymentTokens(vaultAPIRequest);
    });

    describe("create", () => {
      it("should send a POST request", () => {
        const card: Card = {
          cvc: "111",
          expMonth: "05",
          expYear: "2024",
          number: "4123450131000508",
        };

        paymentToken.create(card);

        expect(vaultAPIRequest.post.calledOnce).to.be.true;
      });

      it("should send a request to /payment-tokens", () => {
        const card: Card = {
          cvc: "111",
          expMonth: "05",
          expYear: "2024",
          number: "4123450131000508",
        };

        paymentToken.create(card);

        expect(vaultAPIRequest.post.args[0][1]).to.be.equal("payment-tokens");
      });

      it("should use a public key", () => {
        const card: Card = {
          cvc: "111",
          expMonth: "05",
          expYear: "2024",
          number: "4123450131000508",
        };

        paymentToken.create(card);

        expect(vaultAPIRequest.post.args[0][0]).to.be.equal("PUBLIC");
      });

      it("should send the card details", () => {
        const card: Card = {
          cvc: "111",
          expMonth: "05",
          expYear: "2024",
          number: "4123450131000508",
        };

        paymentToken.create(card);

        expect(vaultAPIRequest.post.args[0][2]).to.be.eql({ card });
      });

      it("should send the card details", () => {
        const card: Card = {
          cvc: "111",
          expMonth: "05",
          expYear: "2024",
          number: "4123450131000508",
        };

        paymentToken.create(card);

        expect(vaultAPIRequest.post.args[0][2]).to.be.eql({ card });
      });
    });
  });
});
