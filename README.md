# PayMaya Vault JavaScript SDK (unofficial)

A sample SDK for the PayMaya Vault API.

## Quick Start

### Install

```sh
# NPM
npm i hyubs/paymaya-vault-node-sdk

# Yarn
yarn add https://github.com/hyubs/paymaya-vault-js-sdk.git
```

### Usage

```js
const PayMayaVault = require("paymaya-vault-node-sdk");

const PUBLIC_API_KEY = "pk-Z0OSzLvIcOI2UIvDhdTGVVfRSSeiGStnceqwUE7n0Ah";
const SECRET_API_KEY = "sk-X8qolYjy62kIzEbr0QRK1h4b4KDVHaNcwMYk39jInSl";

const main = async () => {
  const paymayaVault = new PayMayaVault(PUBLIC_API_KEY, SECRET_API_KEY, "SANDBOX");

  const result = await paymayaVault.paymentTokens().create({
    cvc: "111",
    expMonth: "05",
    expYear: "2024",
    number: "4123450131000508",
  });

  console.log(result);
};

main();
```

## TODOs

### Status of Implemented Modules

  * [ ] Cards
  * [ ] Customers
  * [ ] Fees
  * [ ] Payments
  * [x] PaymentTokens
  * [ ] Refunds
  * [ ] Subscriptions
  * [ ] Voids
  * [ ] WebHooks

### Tests

  * [ ] `lib/HTTPRequest`
  * [ ] `lib/VaultAPIRequest`

## Stack

  * TypeScript
  * Mocha, Chai, Sinon
  * Babel

## Disclaimer

1. I am not affiliated in any way to PayMaya.
2. This is a sample code. This is NOT an official SDK and is not meant for production use.

## License

ISC
