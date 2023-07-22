const HDWalletProvider = require('truffle-hdwallet-provider');
MNEMONIC = ''
INFURA_KEY = ''

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    sepolia: {
      provider: () => {
        return new HDWalletProvider(MNEMONIC, INFURA_KEY)
      },
      network_id: "11155111",
      gas: 6800000,
      gasPrice: 1000000000
    },
  },
  compilers: {
    solc: {
      version: "0.4.24",
    }
  }
};