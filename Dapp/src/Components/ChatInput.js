
import React, { useContext } from 'react';
import GlobalStyles from './../GlobalStyles';
import { Context } from './../store'

import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

import { sendMessage } from "../Utils/Web3Handler"


export default function ChatInput() {
  const [state, dispatch] = useContext(Context);
  const classes = GlobalStyles();

  const [values, setValues] = React.useState("");

  const handleChange = (prop) => (event) => {
    setValues(event.target.value);
  };

  const handleMessageSubmission = (e) => {
    console.log("Submit")
    console.log(values)
    sendMessage(state.web3, state.selectedAddress, values)
  }

  return (
    <div className="ChatInput">
      <Paper style={{ maxHeight: 100 }}>
        <Grid container spacing={1} >


          <Grid item xs={11} sm={11} md={11} xl={11}>

            <Box>
              <FormControl fullWidth className={classes.margin} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={values.amount}
                  onChange={handleChange('amount')}
                  startAdornment={<InputAdornment position="start">📧</InputAdornment>}
                  labelWidth={60}
                  placeholder="Type a message"
                />
              </FormControl>
            </Box>
          </Grid>

          <Grid item xs={1} sm={1} md={1} xl={1}>
            <Box>
            <Button onClick={() => [handleMessageSubmission()]} variant="contained" color="secondary" className={classes.button} > Send  <SendIcon/> </Button>
            </Box>
          </Grid>
        </Grid>

      </Paper>
    </div>
  );
}
