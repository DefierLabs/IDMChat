
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


export default function ChatPlaceholder() {
  const classes = GlobalStyles();
  return (
    <div className="ChatsList">
      <Paper style={{maxHeight: 900, overflow: 'auto'}}>
        <Typography>Select or Start a New IDM Chat</Typography>
      </Paper>
    </div>
  );
}
