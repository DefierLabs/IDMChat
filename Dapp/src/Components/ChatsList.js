
import React, { useContext } from 'react';
import GlobalStyles from './../GlobalStyles';
import { Context } from './../store'

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import ChatsListItem from './ChatsListItem';

import ChainInfo from "../Utils/ChainInfo.js";

export default function ChatsList() {
  const [state, dispatch] = useContext(Context);
  const classes = GlobalStyles();

  //console.log(JSON.parse(window.localStorage.getItem("conversation")))


  console.log(state.conversation)
  var chatList = []
  for (var i = 0; i < state.conversation['nConversation']; i++) {
    var image = ""
    var chainName = ""
    for (var j = 0; j < ChainInfo['length']; j++) {
      if (Number(ChainInfo[j]['chainId']) === Number(state.conversation[i][0]['chain']))
        console.log(ChainInfo[j])
        image = ChainInfo[j]['Image']
        chainName = ChainInfo[j]['chain']
    }

    chatList.push(<><ChatsListItem
      chain={chainName}
      imageAddress={image}
      address={state.conversation[i][0]['counterParty']}
      latestMessage={state.conversation[i][0]['message']}
      time={state.conversation[i][0]['timestamp']}
      date={state.conversation[i][0]['timestamp']}
      showDate={false}
      linkAddress={"p?address=" + state.conversation[i][0]['counterParty'] + "&chain=" + state.conversation[i][0]['chain']}
    /></>)


    chatList.push(<><Divider variant="inset" component="li" /></>)
  }

  return (
    <div className="ChatsList">
      <Paper style={{ height: 900, overflow: 'auto' }}>
        <List className={classes.cardWithBGList} >
          {chatList}
        </List>
      </Paper>
    </div>
  );
}
