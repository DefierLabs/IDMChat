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

import React, { useContext } from 'react';
import GlobalStyles from './../GlobalStyles';
import { Context } from './../store'
import { processConversationData } from "../Utils/GetChatData.js";

export default function ConversationLoader() {
  const [state, dispatch] = useContext(Context);
  const [hasData, setHasData] = React.useState(false)
  const [lastAccount, setLastAccount] = React.useState("0x00")
  if(state.account != "0x00" && hasData == false || lastAccount != state.account){
    processConversationData(state.account).then((value) => { dispatch({ type: 'conversation', payload: value }); setLastAccount(state.account); setHasData(true);});
  }
  else{
    console.log(state.conversation)
    //console.log(JSON.parse(window.localStorage.getItem("conversation")))
  }

  const classes = GlobalStyles();
  
  return (
    <div className="ConversationLoader">

    </div>
  );
}
