
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

import ChatMessage from './ChatMessage';

export default function Chat() {
  const [state, dispatch] = useContext(Context);
  const classes = GlobalStyles();

  var chatItems = []

  if (state.selectedChain != -1 && state.selectedAddress != "0x00") {

    console.log(state.conversation)
    var convo = state.conversation[state.conversation['mapping'][state.selectedAddress]]
    try {
      for (var i = 0; i < convo.length; i++) {
        console.log(convo)

        chatItems.push(<ChatMessage
          address={convo[i]['counterParty']}
          message={convo[i]['message']}
          date={convo[i]['timestamp']}
          time={convo[i]['timestamp']}
          showDate={false}
          isSender={convo[i]['isSender']}
          isGroupChat={false}
          txnLink={convo[i]['tx']}
        />)
        chatItems.push(<Divider variant="inset" component="li" />)
      }
    }
    catch {

    }
  }

  if (chatItems.length == 0) {
    chatItems.push(<Typography
      component="span"
      variant="body2"
      className={classes.inline}
      color="secondary"
    > {"No Conversation History OR History Loading..."}
    </Typography>)
  }

  return (
    <div className="ChatLog">
      <Paper style={{ height: 750, overflow: 'auto' }}>
        <List className={classes.cardWithBGList} >
          {chatItems}
        </List>
      </Paper>
    </div>
  );
}
