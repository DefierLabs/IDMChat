import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

var web3 = null;
var provider;
var account;
var web3Modal
var connected = false;


const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: "9af22c382b3142389625451f5193fc76"
    }
  }
};

export async function loadWeb3() {

  web3Modal = new Web3Modal({
    providerOptions, // required
    cacheProvider: false
  });

  provider = await web3Modal.connect();
  web3 = new Web3(provider);
  //await web3.eth.requestAccounts();
  return web3
}

export async function getAccount(provided_web3) {
  account = await provided_web3.eth.getAccounts()
  connected = true;
  return account
}

export async function connect() {
  web3 = await loadWeb3();
  await getAccount(web3);
  web3Modal.clearCachedProvider();
  web3.eth.requestAccounts()
  return web3
}

export function isConnected() {
  return connected
}

export function returnAccount() {
  return account
}

export async function disconnect() {
  connected = false;
  web3 = null;
  provider = null;
  web3Modal = null;
}

export function getWeb3() {
  return web3;
}

export async function getChainID(_web3){
  var chainId = await _web3.eth.getChainId()
  return chainId
}

export function getWeb3Caller(chainId) {
  var web3;
  if(chainId === 1){
    web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/9af22c382b3142389625451f5193fc76'));
  }
  if(chainId === 4){
    web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/9af22c382b3142389625451f5193fc76'));
  }
  return web3
}

export async function sendMessage(web3, to, message){
  var encodedMessage = web3.utils.utf8ToHex(message)
  var from = (await getAccount(web3))[0]
  console.log(from)
  console.log(to)
  var send = await web3.eth.sendTransaction({ from:from, to:to[0], value:web3.utils.toWei("0"), data:encodedMessage, gas:80000});
}

export async function donate(web3) {
  var donoAddress = "0xe0a09b49721FBD8B23c67a3a9fdE44be4412B8fD"
  var from = (await getAccount(web3))[0]
  console.log(from)
  var encodedMessage = web3.utils.utf8ToHex("IDMChat Donation")
  var send = await web3.eth.sendTransaction({ from:from, to:donoAddress, value:web3.utils.toWei("0.01"), data:encodedMessage, gas:80000});
}