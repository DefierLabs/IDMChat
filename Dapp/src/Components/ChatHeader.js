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

export default function ChatHeader(props) {
  const [state, dispatch] = useContext(Context);
  const classes = GlobalStyles();
  var address = state.selectedAddress
  if(address.length == 1 ){
    address = state.selectedAddress[0]
  }

  return (
    <div className="ChatsListItem">
      <ListItem className={classes.cardWithBGList}  alignItems="flex-start">
        <ListItemAvatar>


          <Identicon address={address} />
        </ListItemAvatar>
        <ListItemText
          primary={state.selectedAddress}
        />
      </ListItem>
    </div>
  );
}
