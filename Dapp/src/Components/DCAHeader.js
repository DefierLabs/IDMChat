
import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';

import GlobalStyles from '../GlobalStyles';

export default function DCAHeader() {
  const classes = GlobalStyles();
  return (
    <div className="TVL">
      <Paper className={classes.headerPaper}>
        <Card className={classes.cardWithoutBg} variant="outlined">
          <Typography variant="h1"  align='center'> 🗠 </Typography>
          <Typography variant="h5" align='center'>Automatically DCA Into Any Token Across Any AMM</Typography>
        </ Card>
        <Card className={classes.cardWithoutBg} variant="outlined">
            <Box align="center">
            <Typography align="center">Create An Automatic Dollar Cost Avg Order Here 📝 </Typography>
              <Typography align="center">Select the Token To Trade💱, Amount 💰 and Period ⌛ </Typography>
              <Typography align="center">The Network of Decentralised Robots 🤖 Will DCA On Your Behalf🔥</Typography>
              <Typography align="center">You Can Sit Back and Watch Your Position Grow 🚀</Typography>
            </Box>
          </Card>
      </Paper>
    </div>
  );
}
