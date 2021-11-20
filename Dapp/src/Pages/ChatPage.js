
import React from 'react';
import ChatsList from '../Components/ChatsList.js';
import Grid from '@material-ui/core/Grid';

import GlobalStyles from '../GlobalStyles';

export default function ChatPage() {
  const classes = GlobalStyles();
  return (
    <div className="Chat">
      <Grid container spacing={1} >
        <Grid item xs={4} sm={4} md={4} xl={4}>
          <ChatsList />
        </Grid>
      </Grid>
    </div>
  );
}
