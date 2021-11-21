
import ChainInfo from "./ChainInfo.js";
import axios from 'axios';
import Web3Modal from "web3modal";

export async function getCovalentData() {
    var Web3 = require('web3');

    var address = "0x456BC3aE1381eB994A2df1d9F7F7DA3e4cE879b0"
    var chain = "137"
    var key = "ckey_618a26bdd9a8408c9cf0ec43379"

    var url = "https://api.covalenthq.com/v1/" + chain + "/address/" + address + "/transactions_v2/?quote-currency=USD&format=JSON&block-signed-at-asc=false&no-logs=true&key=" + key

    console.log(url)
    
    var response
    try {
        response = await axios.get(url);
        console.log(response)
    } catch (axiosErr) {
        console.log(axiosErr)
    }

    var data = response['data']['data']['items']
    var filteredData = []

    for(var i=0; i<data.length; i++){
        if(data[i]['gas_spent'] < 75000){
            filteredData.push(data[i])
        }
    }

    console.log(filteredData)

    console.log("API DATA:", ChainInfo)

    var chains = []
    for(var i=0; i<ChainInfo['length']; i++){
      //activeVaults.push(<VaultItem data={VaultData[i]} />)
      console.log(ChainInfo[i]['RPC'])
    }

    var web3 = new Web3(new Web3.providers.HttpProvider('https://speedy-nodes-nyc.moralis.io/dba847ca0bbe4c78ca7fd67e/polygon/mainnet'));

    var conversation = {}

    for(var i=0; i<filteredData.length; i++){
        console.log(filteredData[i]['tx_hash'])

        var receipt = await web3.eth.getTransaction(filteredData[i]['tx_hash'])
        console.log(web3.utils.hexToUtf8(receipt['input']))
    }





    

}

function processData(transaction) {

}


