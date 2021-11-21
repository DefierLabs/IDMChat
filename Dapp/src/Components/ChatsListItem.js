
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

export default function ChatsListItem(props) {
  const classes = GlobalStyles();
  var chain = "xDai"
  var imageAddress = "https://s2.coinmarketcap.com/static/img/coins/200x200/5601.png"
  var address = "0x0000000000000000000000000000000000000000"
  var latestMessage = "them: We are all rekt"
  var linkAddress = "p?address=" + props.address + "&chain=" + props.chain
  var date = "20/11/2021"
  var time = "20:20 UTC"
  var showDate = false 

  var dateTime = props.time
  if(props.showDate){
    dateTime = props.date;
  }

  return (
    <div className="ChatsListItem">
      <ListItem button component={Link} to={props.linkAddress} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar src={props.imageAddress} />
        </ListItemAvatar>
        <ListItemText
          primary={props.address + " on " + props.chain}
          secondary={
            <React.Fragment>
              {props.latestMessage}
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
