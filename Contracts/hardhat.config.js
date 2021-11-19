require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-truffle5");
require("dotenv").config();

module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 999999,
      },
    },
  },
  mocha: {
    timeout: 200000,
  },
  networks: {
    hardhat: {
      forking: {
        url: process.env.RPC_LINK,
      },
      accounts: {
        accountsBalance: "10000000000000000000000",
      },
    },
  },
};