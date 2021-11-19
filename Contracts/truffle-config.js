const HDWalletProvider = require('@truffle/hdwallet-provider');
require("dotenv").config();

module.exports = {
networks: {
	developmentcli: {
        host: "localhost",
        port: 8545,
        network_id: "4689"
      },
    bsc: {
      provider: function() {
      return new HDWalletProvider([process.env.ACC_KEY], process.env.RPC_LINK);
      },
      network_id: '56',
      gas: 8500000,
      gasPrice: 5000000000,
      skipDryRun: true
  }
},
    compilers: {
        solc:{
            version: "^0.8.0",
            settings: {
            optimizer: {
                enabled: true,
                runs: 999999},
        },
    },
},
}
 