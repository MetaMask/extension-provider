# MetaMask Extension Provider

A module for providing a MetaMask provider to other WebExtensions.

The account provided by this provider will be the user's MetaMask account.

When sending signing requests to this provider, MetaMask will prompt the user to sign with their accounts.

Works in:

- Chrome
- Firefox

## Usage

```javascript
const createMetaMaskProvider = require('metamask-extension-provider')

const provider = createMetaMaskProvider()

// Enjoy!
```

## Adding additional browser support

Simply add MetaMask's extension ID for that browser's store to [the config file](./config.json).

