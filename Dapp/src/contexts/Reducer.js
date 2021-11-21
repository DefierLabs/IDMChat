/*
  Copyright 2017 Defier Labs Limited (UK)
  Licensed under the Business Source License 1.1 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  https://spdx.org/licenses/BUSL-1.1.html

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

  Author: Harnick Khera (Github.com/Hephyrius)
*/


const Reducer = (state, action) => {
    switch (action.type) {
        case 'web3_connected':
            return {
                ...state,
                web3: action.payload,
            };
        case 'web3_caller_connected':
            return {
                ...state,
                web3_caller: action.payload,
            };
        case 'web3_disconnected':
            return {
                ...state,
                web3: null,
                account: "0x00",
                connected: false
            };
        case 'chainId':
            return {
                ...state,
                chainId: action.payload,
            };
        case 'set_account':
            return {
                ...state,
                account: action.payload
            };
        case 'set_connected':
            return {
                ...state,
                connected: action.payload
            };
        case 'conversation':
            return {
                ...state,
                conversation: action.payload
            };
        case 'selectedAddress':
            return {
                ...state,
                selectedAddress: action.payload
            };
        case 'selectedChain':
            return {
                ...state,
                selectedChain: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;