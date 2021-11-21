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

import React from 'react';
import ChatsList from '../Components/ChatsList.js';
import ChatAddress from '../Components/ChatAddress.js';
import Chat from '../Components/Chat.js';
import ChatInput from '../Components/ChatInput.js';
import ChatPlaceholder from '../Components/ChatPlaceholder.js';
import ChatHeader from '../Components/ChatHeader.js';
import Grid from '@material-ui/core/Grid';

import GlobalStyles from '../GlobalStyles';

export default function ChatPage() {
  const classes = GlobalStyles();
  var showPlaceholder = false

  var chatArea = [<Chat />]

  if (showPlaceholder) {
    chatArea = [<ChatPlaceholder />]
  }

  return (
    <div className="Chat">
      <Grid container spacing={1} >

        <Grid item xs={4} sm={4} md={4} xl={4}>
          
          <Grid container spacing={1} >
            <Grid item xs={12} sm={12} md={12} xl={12}>
              <ChatAddress/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} xl={12}>
            <ChatsList />
            </Grid>
          </Grid>
        </Grid>
        
        <Grid item xs={8} sm={8} md={8} xl={8}>
          
          <Grid container spacing={1} >
          <Grid item xs={12} sm={12} md={12} xl={12}>
          <ChatHeader/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} xl={12}>
              {chatArea}
            </Grid>
            <Grid item xs={12} sm={12} md={12} xl={12}>
              <ChatInput/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
