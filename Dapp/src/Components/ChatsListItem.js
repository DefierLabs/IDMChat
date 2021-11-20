
import React from 'react';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import GlobalStyles from '../GlobalStyles';

export default function ChatsListItem() {
  const classes = GlobalStyles();
  var chain = "xDai"
  var imageAddress = "https://s2.coinmarketcap.com/static/img/coins/200x200/5601.png"
  var address = "0x0000000000000000000000000000000000000000"
  var latestMessage = "them: We are all rekt"
  var linkAddress = "p?address=" + address + "&chain=" + chain
  var date = "20/11/2021"
  var time = "20:20 UTC"
  var showDate = false 

  var dateTime = time
  if(showDate){
    dateTime = date;
  }

  return (
    <div className="ChatsListItem">
      <ListItem button component={Link} to={linkAddress} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar src={imageAddress} />
        </ListItemAvatar>
        <ListItemText
          primary={address + " on " + chain}
          secondary={
            <React.Fragment>
              {latestMessage}
            </React.Fragment>
          }
        />
        <Typography
          component="span"
          variant="body2"
          className={classes.inline}
          color="secondary"
        > {dateTime}
        </Typography>
      </ListItem>
    </div>
  );
}
