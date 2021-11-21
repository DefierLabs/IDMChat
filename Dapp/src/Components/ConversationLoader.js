import React, { useContext } from 'react';
import GlobalStyles from './../GlobalStyles';
import { Context } from './../store'
import { processConversationData } from "../Utils/GetChatData.js";

export default function ConversationLoader() {
  const [state, dispatch] = useContext(Context);
  const [values, setValues] = React.useState(false)
  if(values == false){
    processConversationData().then((value) => { dispatch({ type: 'conversation', payload: value }); setValues(true);});
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
