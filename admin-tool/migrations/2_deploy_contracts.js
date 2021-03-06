const SocialNetwork = artifacts.require("SocialNetwork");
const Token = artifacts.require("Token");
const EthSwap = artifacts.require("EthSwap");

module.exports = async function(deployer) {
  await deployer.deploy(SocialNetwork);

  // Deploy Token
  await deployer.deploy(Token);
  const token = await Token.deployed()

  // Deploy EthSwap
  await deployer.deploy(EthSwap, token.address);
  const ethSwap = await EthSwap.deployed()

  // Transfer 75 Million tokens to EthSwap (100million)
  await token.transfer(ethSwap.address, '75000000000000000000000000');

  // Transfer to the founders wallet
  // 25 Million until I set up the rest of the accounts
  await token.transfer('0x6F7d7d68c3Eed4Df81CF5F97582deef8ABC51533', '2500000000000000000000000');

  // Transfer to the partners wallets


  // Transfer to the marketing wallet


  // Transfer to the bounties wallet

};
