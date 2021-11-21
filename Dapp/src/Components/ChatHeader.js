
import React, { useContext } from 'react';
import GlobalStyles from './../GlobalStyles';
import { Context } from './../store'

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import { Identicon } from 'ethereum-react-components';

export default function ChatHeader(props) {
  const [state, dispatch] = useContext(Context);
  const classes = GlobalStyles();

  return (
    <div className="ChatsListItem">
      <ListItem className={classes.cardWithBGList}  alignItems="flex-start">
        <ListItemAvatar>
          <Identicon address={state.selectedAddress[0]} />
        </ListItemAvatar>
        <ListItemText
          primary={state.selectedAddress}
        />
      </ListItem>
    </div>
  );
}
