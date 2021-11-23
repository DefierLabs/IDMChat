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
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

import { sendMessage } from "../Utils/Web3Handler"


export default function ChatAddress() {
  const [state, dispatch] = useContext(Context);
  const classes = GlobalStyles();

  const [values, setValues] = React.useState("");

  const handleChange = (prop) => (event) => {
    setValues(event.target.value);
  };

  const handleMessageSubmission = (e) => {
    dispatch({ type: 'selectedAddress', payload: values });
  }

  return (
    <div className="ChatInput">
      <Paper style={{ maxHeight: 100 }}>
        <Grid container spacing={1} >

          <Grid item xs={10} sm={10} md={10} xl={10}>

            <Box>
              <FormControl fullWidth className={classes.margin} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={values.amount}
                  onChange={handleChange('amount')}
                  startAdornment={<InputAdornment position="start">📧</InputAdornment>}
                  labelWidth={50}
                  placeholder="Enter an Address"
                />
              </FormControl>
            </Box>
          </Grid>

          <Grid item xs={1} sm={1} md={1} xl={1}>
            <Box>
            <Button onClick={() => [handleMessageSubmission()]} variant="contained" color="secondary" className={classes.button} > Search </Button>
            </Box>
          </Grid>
        </Grid>

      </Paper>
    </div>
  );
}
