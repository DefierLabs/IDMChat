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

import React, {createContext, useReducer} from "react";
import Reducer from './contexts/Reducer'


const initialState = {
    account: "0x00",
    connected: false,
    web3: null,
    web3_caller: null,
    conversation: { nConversation: 0, mapping: {}, txs: {} },
    chainId: 1,
    error: null,
    selectedAddress:"0x00",
    selectedChain:-1
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;