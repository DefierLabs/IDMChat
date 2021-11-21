
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


export default function ChatsListItem(props) {
  const [state, dispatch] = useContext(Context);
  const classes = GlobalStyles();
  
  var dateTime = props.time
  if(props.showDate){
    dateTime = props.date;
  }

  const handleClick = (e) => {
    dispatch({ type: 'selectedAddress', payload: props.address });
    dispatch({ type: 'selectedChain', payload: props.chainId });
    console.log(state.selectedChain)
    console.log(state.selectedAddress)
  }

  return (
    <div className="ChatsListItem">
      <ListItem button component={Button} onClick={() => [handleClick()]} alignItems="flex-start">
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
