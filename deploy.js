const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3  = require('web3');
const { abi, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'season parent sun fiber buzz gentle mango such ramp obscure more budget',
  'https://sepolia.infura.io/v3/0b2935aa08a244a7a234331f88e5bb64'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: bytecode })
    .send({ gas: '3000000', from: accounts[0] });

  console.log(abi);
  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();