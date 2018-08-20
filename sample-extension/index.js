const createProvider = require('../')
const Eth = require('ethjs')

const provider = createProvider()

renderText('Loading...')

if (provider) {
  console.log('provider detected', provider)
  const eth = new Eth(provider)
  renderText('MetaMask provider detected.')
  eth.accounts()
  .then((accounts) => {
    renderText(`Detected MetaMask account ${accounts[0]}`)
  })
} else {
  renderText('MetaMask provider not detected.')
}

function renderText (text) {
  content.innerText = text
}

