/*
  Copyright 2017 Defier Labs Limited (UK)
  Licensed under the Business Source License 1.1 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  https://spdx.org/licenses/BUSL-1.1.html

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
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import ChatMessage from './ChatMessage';

export default function Chat() {
  const [state, dispatch] = useContext(Context);
  const classes = GlobalStyles();

  var chatItems = []

  if (state.selectedChain != -1 && state.selectedAddress != "0x00") {

    console.log(state.conversation)
    var convo = state.conversation[state.conversation['mapping'][state.selectedAddress]]
    try {
      for (var i = 0; i < convo.length; i++) {
        console.log(convo)

        chatItems.push(<ChatMessage
          address={convo[i]['counterParty']}
          message={convo[i]['message']}
          date={convo[i]['timestamp']}
          time={convo[i]['timestamp']}
          showDate={false}
          isSender={convo[i]['isSender']}
          isGroupChat={false}
          txnLink={convo[i]['tx']}
        />)
        chatItems.push(<Divider variant="inset" component="li" />)
      }
    }
    catch {

    }
  }

  if (chatItems.length == 0) {
    chatItems.push(<Typography
      component="span"
      variant="body2"
      className={classes.inline}
      color="secondary"
    > {"No Conversation History OR History Loading..."}
    </Typography>)
  }

  return (
    <div className="ChatLog">
      <Paper style={{ height: 750, overflow: 'auto' }}>
        <List className={classes.cardWithBGList} >
          {chatItems}
        </List>
      </Paper>
    </div>
  );
}
