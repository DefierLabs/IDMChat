
import React, { useContext } from 'react';
import GlobalStyles from './../GlobalStyles';
import { Context } from './../store'
import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SyncIcon from '@material-ui/icons/Sync';

import { connect, disconnect, getAccount, getWeb3Caller, getChainID } from "../Utils/Web3Handler"

export default function Bar() {
  const [state, dispatch] = useContext(Context);
  const classes = GlobalStyles();

  const [walletChainId, setWalletChainId] = React.useState(0);

  var idmPrice = "Coming Soon™"
  var chain = "xDai"

  const handleConnection = () => {
    var web3 = connect()
    web3.then((value) => { dispatch({ type: 'web3_connected', payload: value }) });
    web3.then((value) => { dispatch({ type: 'web3_caller_connected', payload: value }) });
    dispatch({ type: 'set_connected', payload: true })
    checkConnection()
    updateChainId()
  }

  const handleDisonnection = () => {
    dispatch({ type: 'web3_disconnected', payload: "" })
    disconnect()
  }

  const checkConnection = () => {
    if (state.web3 !== null) {
      if (state.account === "0x00") {
        var account = getAccount(state.web3)
        account.then((value) => { dispatch({ type: 'set_account', payload: value }) });
      }
    }
  }

  const connectCaller = () => {
    if (state.web3_caller === null) {
      dispatch({ type: 'web3_caller_connected', payload: getWeb3Caller(state.chainId) })
    }
  }

  const updateCaller = () => {
    dispatch({ type: 'web3_caller_connected', payload: getWeb3Caller(state.chainId) })
  }

  const updateChainId = () => {
    if (state.connected && state.account !== "0x00") {
      getChainID(state.web3).then((value) => { setWalletChainId(value) })
    }
  }

  var connectbutton = []

  if (!state.connected) {
    connectbutton.push(<Button color="inherit" onClick={() => [handleConnection()]}> <AccountBalanceWalletIcon />  Connect To Wallet</Button>)
  }
  else if (state.connected && state.account === "0x00") {
    connectbutton.push(<IconButton color="inherit" aria-label="open drawer" onClick={checkConnection}><AccountBalanceWalletIcon /><SyncIcon /></IconButton>)
    connectbutton.push(<Button color="inherit" onClick={() => [handleDisonnection()]}> <ExitToAppIcon /> Disconnect </Button>)
    checkConnection()
  }
  else {
    connectbutton.push(<Typography variant="h10" noWrap> <AccountBalanceWalletIcon /> {state.account} </Typography>)
    connectbutton.push(<Button color="inherit" onClick={() => [handleDisonnection()]}> <ExitToAppIcon /> Disconnect </Button>)
  }


  return (
    <div className="appBar">
      <AppBar position="static" className={clsx(classes.appBar)}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}> IDMChat💬 </Typography>
          <div className={classes.toolbarCenter}>
            <Button color="inherit" href="#" >Chat</Button>
          </div>
          <div className={classes.toolbarCenter}>
            <Button color="inherit" href="#About" >About</Button>
          </div>
          <div className={classes.toolbarButtons}>
            <Button color="inherit" href="#" >Donate to Dev</Button>
            <Button color="inherit" href="#" >🔗 {chain}</Button>
            {connectbutton}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
