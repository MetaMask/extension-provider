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

## Editing the example

You must have `browserify` installed (`npm i -g browserify`).

You can edit the sample file `sample-extension/index.js` and then rebuild the file with `npm run buildSample`.

## Current Limitations

Currently really only works well when the provider is detected and exists, and the user has MetaMask installed.

In order to identify when there is a problem (like MetaMask was not connected), some kind of proper error handling must be added to [metamask-inpage-provider](https://github.com/MetaMask/metamask-inpage-provider) that exposes the errors to the consumer of the provider. Maybe making it an event-emitter, so it can emit its errors, instead of just logging them.

