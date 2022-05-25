require("@nomiclabs/hardhat-waffle");


 module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: process.env.RPC_URL,
      accounts: [process.env.PRI_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },

};