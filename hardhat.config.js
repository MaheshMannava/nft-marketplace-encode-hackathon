/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")
require('dotenv').config()
require('@nomiclabs/hardhat-etherscan');
require("@nomiclabs/hardhat-ethers");

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
  mumbai: {
    url: "https://polygon-mumbai.g.alchemy.com/v2/BzWAXggbEAB2yO9twqeM7m_x6UR00liL",
    accounts: [process.env.privateKey]
  }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  etherscan:{
    apiKey: process.env.POLYGONSCAN_API_KEY,
  },
}