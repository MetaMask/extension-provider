const MetamaskInpageProvider = require('metamask-inpage-provider')
const PortStream = require('extension-port-stream')
const { detect } = require('detect-browser')
const browser = detect()
const config = require('./config.json')

module.exports = function createMetaMaskProvider () {
  let currentMetaMaskId = getMetaMaskId()
  const metamaskPort = chrome.runtime.connect(currentMetaMaskId)
  const pluginStream = new PortStream(metamaskPort)
  const provider = new MetamaskInpageProvider(pluginStream)
  return provider
}

function getMetaMaskId () {
  switch (browser && browser.name) {
    case 'chrome':
      return config.CHROME_ID
    case 'firefox':
      return config.FIREFOX_ID
    default:
      return config.CHROME_ID
  }
}

