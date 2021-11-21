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
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import IconButton from '@material-ui/core/IconButton';

import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';

import GlobalStyles from './../GlobalStyles';

export default function Socials() {
  const classes = GlobalStyles();
  return (
    <div className="Socials">
      <Paper className={classes.headerPaper}>
        <Grid container spacing={1} >
          <Grid item xs={12} sm={4} md={4} xl={4} />
          <Grid item xs={12} sm={4} md={4} xl={4} >
            <Card className={classes.cardWithoutBg}>
              <Grid container spacing={1} >
                <Grid item xs={3} sm={3} md={3} xl={3}> <IconButton color="inherit" href="https://twitter.com/defierlabs"><TwitterIcon/>  </IconButton></Grid>
                <Grid item xs={3} sm={3} md={3} xl={3}> <IconButton color="inherit" href="https://t.me/defierlabs"><TelegramIcon/> </IconButton></Grid>
                <Grid item xs={3} sm={3} md={3} xl={3}> <IconButton color="inherit" href="https://github.com/defierlabs"><GitHubIcon/>   </IconButton></Grid>
                <Grid item xs={3} sm={3} md={3} xl={3}> <IconButton color="inherit" href="mailto:admin@defierlabs.xyz"><EmailIcon/>    </IconButton></Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4} xl={4} />
        </Grid>
      </Paper>
    </div>
  );
}
