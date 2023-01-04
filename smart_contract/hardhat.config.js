require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/vbDM30BnS74kb_deeJ9RbiOZNISIal9j',
      accounts: ['2ac4dac9e9ab8d3aea5ace85b249de9f3e86c695f2588ed13043b1a081b87213'],
    },
  },
}