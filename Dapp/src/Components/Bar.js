import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GlobalStyles from './../GlobalStyles';

export default function Bar() {
  const classes = GlobalStyles();
  var idmPrice = "Coming Soon™"
  return (
    <div className="appBar">
      <AppBar position="static" className={clsx(classes.appBar)}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}> IDMChat💬 </Typography>
          <div className={classes.toolbarCenter}>
            <Button color="inherit" href="#" >Chat</Button>
          </div>
          <div className={classes.toolbarButtons}>
            <Button color="inherit" href="#" >$IDM 🗠 {idmPrice}</Button>
            <Button color="inherit">Connect Wallet</Button>
          </div>
        </Toolbar>
    </AppBar>
    </div>
  );
}
