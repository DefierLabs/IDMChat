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

export default function ChatMessage(props) {
  const classes = GlobalStyles();

  var address = "0x0000000000000000000000000000000000000000"
  var message = "we are all rekt"
  var date = "20/11/2021"
  var time = "20:20 UTC"
  var showDate = false 
  var isSender = true
  var isGroupChat = false
  var txnLink = "https://defier.capital"
  var dateTime = props.time
  if(props.showDate){
    dateTime = props.date;
  }

  var backgroundColor = "grey"
  var textColor = "white"

  if(props.isSender){
    backgroundColor = "#4800FF"
    textColor = "white"
  }

  return (
    <div className="ChatMessage">

        <Paper style={{background:backgroundColor, color:textColor}} className={classes.cardWithoutBg}>
        {props.isGroupChat && (<Typography variant="h6" className={classes.title}>{props.address}</Typography>)}
        <Typography variant="h6" className={classes.title}>{props.message}</Typography>
        <Typography variant="h7" align="right" className={classes.title}>{dateTime} <Link href={props.txnLink}>@ TXN </Link></Typography>
        </Paper>

    </div>
  );
}
