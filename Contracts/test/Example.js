const { BN, expectRevert, send, ether } = require('@openzeppelin/test-helpers');
const baseContract  = artifacts.require ("./Example.sol");

contract("Example", async accounts => {

  var deployedContract

  it('should be able to deploy', async () => {
    deployedContract = await baseContract.new({from: accounts[0]})
  });
  
  it('should be able to start', async () => {
    await deployedContract.start({from: accounts[0]})
  });

});