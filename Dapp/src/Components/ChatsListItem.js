/*
  Copyright 2017 Defier Labs Limited (UK)
  Licensed under the MIT License (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

 https://spdx.org/licenses/MIT.html

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

  Author: Harnick Khera (Github.com/Hephyrius)
*/

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


export default function ChatsListItem(props) {
  const [state, dispatch] = useContext(Context);
  const classes = GlobalStyles();

  var address = props.address
  if(address.length == 1 ){
    address = props.address[0]
  }

  var dateTime = props.time
  if (props.showDate) {
    dateTime = props.date;
  }

  const handleClick = (e) => {
    dispatch({ type: 'selectedAddress', payload: props.address });
    dispatch({ type: 'selectedChain', payload: props.chainId });
  }

  var ident = []
  try {
    ident.push(<Identicon address={address} />)
  }
  catch{

  }

  return (
    <div className="ChatsListItem">
      <ListItem button component={Button} onClick={() => [handleClick()]} alignItems="flex-start">
        <ListItemAvatar>
          {ident}
        </ListItemAvatar>
        <ListItemText
          primary={props.address}
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
