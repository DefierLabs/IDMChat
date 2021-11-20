
import React from 'react';
import ChatsList from '../Components/ChatsList.js';
import Chat from '../Components/Chat.js';
import ChatPlaceholder from '../Components/ChatPlaceholder.js';
import Grid from '@material-ui/core/Grid';

import GlobalStyles from '../GlobalStyles';

export default function ChatPage() {
  const classes = GlobalStyles();
  var showPlaceholder = true

  var chatArea = [<Chat/>]

  if(showPlaceholder){
    chatArea = [<ChatPlaceholder />]
  }

  return (
    <div className="Chat">
      <Grid container spacing={1} >
        <Grid item xs={4} sm={4} md={4} xl={4}>
          <ChatsList />
        </Grid>
        <Grid item xs={8} sm={8} md={8} xl={8}>
          {chatArea}
        </Grid>
      </Grid>
    </div>
  );
}
