
import ChainInfo from "./ChainInfo.js";
import axios from 'axios';

export async function processConversationData() {
    var Web3 = require('web3');

    var address = "0x5dc3603C9D42Ff184153a8a9094a73d461663214" // "0x456BC3aE1381eB994A2df1d9F7F7DA3e4cE879b0"
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

    for (var i = 0; i < data.length; i++) {
        if (data[i]['gas_spent'] < 66000) {
            filteredData.push(data[i])
        }
    }

    console.log(filteredData)

    console.log("API DATA:", ChainInfo)

    var chains = []
    for (var i = 0; i < ChainInfo['length']; i++) {
        //activeVaults.push(<VaultItem data={VaultData[i]} />)
        console.log(ChainInfo[i]['RPC'])
    }

    var web3 = new Web3(new Web3.providers.HttpProvider('https://speedy-nodes-nyc.moralis.io/dba847ca0bbe4c78ca7fd67e/polygon/mainnet'));

    var allMessageData = []

    for (var i = 0; i < filteredData.length; i++) {

        var receipt = await web3.eth.getTransaction(filteredData[i]['tx_hash'])
        try {
            var asText = web3.utils.hexToUtf8(receipt['input'])
            if (asText.length > 0) {
                //console.log(filteredData[i]['tx_hash'])
                //console.log(asText)
                var blockNumber = receipt['blockNumber']
                var timestamp = (await web3.eth.getBlock(blockNumber))['timestamp']
                //console.log(timestamp)
                var messageData = {from:receipt['from'], to:receipt['to'], message:asText,  timestamp:timestamp, tx:filteredData[i]['tx_hash'], chain:chain}
                allMessageData.push(messageData)
                //console.log(messageData)
            }
        }
        catch {
            console.log("Error")
        }
    }

    var conversation = {nConversation:0, mapping:{},}

    for(var i = 0; i<allMessageData.length; i++){
        var messageData = allMessageData[i]
        var newMessageData = {  
                                isSelfSend: false, 
                                isSender:false, 
                                message:messageData['message'], 
                                chain:messageData['chain'],
                                timestamp:messageData['timestamp'],
                                counterParty: address,
                                tx: messageData['tx']
                            }

        if(messageData['from'] === messageData['to']){
            newMessageData['isSelfSend'] = true
            newMessageData['isSender'] = true

        } else if (messageData['from'] == address) {
            newMessageData['isSender'] = true
            newMessageData['counterParty'] = messageData['to']
        }
        else{
            newMessageData['isSender'] = false
            newMessageData['counterParty'] = messageData['from']
        }
        
        if (typeof conversation['mapping'][newMessageData['counterParty']] == 'undefined'){
            conversation['mapping'][newMessageData['counterParty']] = conversation['nConversation']
            conversation[conversation['nConversation']] = []
            conversation['nConversation'] = conversation['nConversation'] + 1
        }
        
        conversation[conversation['mapping'][newMessageData['counterParty']]].push(newMessageData)
        
        
    }
    //window.localStorage.setItem("conversation", JSON.stringify(conversation));
    //console.log(conversation)
    return conversation
}



