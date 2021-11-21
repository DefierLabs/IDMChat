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
