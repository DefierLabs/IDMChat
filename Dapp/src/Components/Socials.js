
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
