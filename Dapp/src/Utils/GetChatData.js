/*
  Copyright 2017 Defier Labs Limited (UK)
  Licensed under the MIT License (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

 https://spdx.org/licenses/MIT.html

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

  Author: Harnick Khera (Github.com/Hephyrius)
*/

import ChainInfo from "./ChainInfo.js";
import axios from 'axios';

export async function processConversationData(address, chain, conversation) {
    var Web3 = require('web3');

    if (address !="0x00") {

        var key = "ckey_618a26bdd9a8408c9cf0ec43379"
        var api_query = "https://api.covalenthq.com/v1/" + chain + "/address/" + address + "/transactions_v2/?quote-currency=USD&format=JSON&block-signed-at-asc=false&no-logs=true&key=" + key

        var response
        try {
            response = await axios.get(api_query);
        } catch (axiosErr) {
        }

        var data = response['data']['data']['items']
        var filteredData = []

        for (var i = 0; i < data.length; i++) {
            if (data[i]['gas_spent'] < 66666) {
                filteredData.push(data[i])
            }
        }

        var chainDetails
        for (var i = 0; i < ChainInfo['length']; i++) {
            if (ChainInfo[i]['chainId'] ==chain) {
                chainDetails = ChainInfo[i]
            }
        }

        console.log(chainDetails['chain'])

        var web3 = new Web3(new Web3.providers.HttpProvider(chainDetails['RPC']));

        var allMessageData = []

        for (var i = 0; i < filteredData.length; i++) {

            var receipt = await web3.eth.getTransaction(filteredData[i]['tx_hash'])
            try {
                var asText = web3.utils.hexToUtf8(receipt['input'])
                if (asText.length > 0) {
                    var blockNumber = receipt['blockNumber']
                    var timestamp = (await web3.eth.getBlock(blockNumber))['timestamp']
                    var messageData = { from: receipt['from'], to: receipt['to'], message: asText, timestamp: timestamp, tx: filteredData[i]['tx_hash'], chain: chainDetails['chain'] }
                    allMessageData.push(messageData)
                }
            }
            catch { }
        }

        for (var i = 0; i < allMessageData.length; i++) {
            var messageData = allMessageData[i]
            var newMessageData = {
                isSelfSend: false,
                isSender: false,
                message: messageData['message'],
                chain: messageData['chain'],
                timestamp: messageData['timestamp'],
                counterParty: address,
                tx: messageData['tx']
            }

            if (messageData['from'] == messageData['to']) {
                newMessageData['isSelfSend'] = true
                newMessageData['isSender'] = true

            } else if (messageData['from'] ==address) {
                newMessageData['isSender'] = true
                newMessageData['counterParty'] = messageData['to']
            }
            else {
                newMessageData['isSender'] = false
                newMessageData['counterParty'] = messageData['from']
            }

            if (typeof conversation['mapping'][newMessageData['counterParty']] =='undefined') {
                conversation['mapping'][newMessageData['counterParty']] = conversation['nConversation']
                conversation[conversation['nConversation']] = []
                conversation['nConversation'] = conversation['nConversation'] + 1
            }

            if (typeof conversation['txs'][newMessageData['tx']] =='undefined'){
                conversation['txs'][newMessageData['tx']] = true
                conversation[conversation['mapping'][newMessageData['counterParty']]].push(newMessageData)
            }
        }
        return conversation

    }
    else {
        return conversation
    }
}



