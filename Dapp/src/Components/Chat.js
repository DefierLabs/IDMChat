
import React from 'react';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import GlobalStyles from '../GlobalStyles';

import ChatMessage from './ChatMessage';

export default function Chat() {
  const classes = GlobalStyles();
  return (
    <div className="ChatLog">
      <Paper style={{height: 830, overflow: 'auto'}}>
      <List className={classes.cardWithBGList} >
        <ChatMessage />
        <Divider variant="inset" component="li" />
        <ChatMessage />
        <Divider variant="inset" component="li" />
        <ChatMessage />
        <Divider variant="inset" component="li" />
      </List>
      </Paper>
    </div>
  );
}
