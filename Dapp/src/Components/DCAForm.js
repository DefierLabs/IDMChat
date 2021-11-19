
import React from 'react';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';


import GlobalStyles from './../GlobalStyles';
import { DirectionsSubwaySharp } from '@material-ui/icons';

export default function DCAForm() {
  const classes = GlobalStyles();
  var balance = "0.01"
  var token0name = "token0"
  var token0tradevalue = "0.00"


  const [tradeAmount, setTradeAmount] = React.useState(0);
  const [selectedToken0, setSelectedToken0] = React.useState(-1);
  const [selectedToken1, setSelectedToken1] = React.useState(-1);

  const [weeks, setWeeks] = React.useState(0);
  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);

  const handleTradeAmountFieldChange = (e) => {
    setTradeAmount(e.target.value);
  }

  const handleWeekFieldChange = (e) => {
    setWeeks(e.target.value);
  }

  const handleDayFieldChange = (e) => {
    setDays(e.target.value);
  }

  const handleHourFieldChange = (e) => {
    setHours(e.target.value);
  }

  const handleMinuteFieldChange = (e) => {
    setMinutes(e.target.value);
  }

  const handleToken0Change = (e) => {
    console.log(e.target)
    try {
      setSelectedToken0(e.target.innerText.split("-")[1])
    }
    catch {
      console.log("error")
    }
  };

  const handleToken1Change = (e) => {
    console.log(e.target)
    try {
      setSelectedToken1(e.target.innerText.split("-")[1])
    }
    catch {
      console.log("error")
    }
  };


  return (
    <div className="DCAForm">
      <Paper className={classes.headerPaper}>
        <Grid container spacing={1} >
          <Grid item xs={12} sm={2} md={3} xl={3} />
          <Grid item xs={12} sm={8} md={6} xl={6}>
            <Paper className={classes.cardWithoutBgwithBorder} variant="outlined">
              <form onSubmit={e => { console.log(e) }}>
                <Grid container spacing={1} >
                  <Grid item xs={12} sm={12} md={12} xl={12}>
                    <Card className={classes.cardWithoutBg} variant="outlined">
                      <Typography align="center" variant="h4"> Create Automated Order </Typography>
                    </Card>
                  </Grid>

                  <Grid container spacing={1} >

                    <Grid item xs={3} sm={3} md={3} xl={3}>
                      <Card className={classes.cardWithoutBg}>
                        <Typography align="left" variant="h6"> Swap </Typography>
                      </Card>
                    </Grid>

                    <Grid item xs={3} sm={3} md={3} xl={3}>
                      <Card className={classes.cardWithoutBg}>
                        <Box align="center">
                          <TextField id="mount" variant="outlined" type="number" value={tradeAmount} inputProps={{ min: "0" }} style={{ width: 200, color: "white", background: "white" }} onChange={handleTradeAmountFieldChange} />
                        </Box>
                      </Card>
                    </Grid>

                    <Grid item xs={6} sm={6} md={6} xl={6}>
                      <Card className={classes.cardWithoutBg}>
                        <Autocomplete
                          id="token0-select"
                          style={{ width: 400, color: "white", background: "white" }}
                          options={tokensPlaceholder}
                          classes={{
                            option: classes.option,
                          }}
                          onChange={handleToken0Change}
                          autoHighlight
                          getOptionLabel={(option) => option.symbol}
                          renderOption={(option) => (
                            <React.Fragment>
                              {option.symbol} - {option.name}
                            </React.Fragment>
                          )}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Token"
                              variant="filled"
                              name="selectedToken"
                              inputProps={{
                                ...params.inputProps,
                                autoComplete: 'disabled', // disable autocomplete and autofill
                              }}
                            />
                          )}
                        />
                      </Card>
                    </Grid>
                  </Grid>

                  <Grid container spacing={1} >

                    <Grid item xs={3} sm={3} md={3} xl={3}>
                      <Card className={classes.cardWithoutBg}>
                        <Typography align="left" variant="h6"> For </Typography>
                      </Card>
                    </Grid>

                    <Grid item xs={3} sm={3} md={3} xl={3}>
                      <Card className={classes.cardWithoutBg}>
                      </Card>
                    </Grid>

                    <Grid item xs={6} sm={6} md={6} xl={6}>
                      <Card className={classes.cardWithoutBg}>
                        <Autocomplete
                          id="token1-select"
                          style={{ width: 400, color: "white", background: "white" }}
                          options={tokensPlaceholder}
                          classes={{
                            option: classes.option,
                          }}
                          onChange={handleToken1Change}
                          autoHighlight
                          getOptionLabel={(option) => option.symbol}
                          renderOption={(option) => (
                            <React.Fragment>
                              {option.symbol} - {option.name}
                            </React.Fragment>
                          )}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Token"
                              variant="filled"
                              name="selectedToken"
                              inputProps={{
                                ...params.inputProps,
                                autoComplete: 'disabled', // disable autocomplete and autofill
                              }}
                            />
                          )}
                        />
                      </Card>
                    </Grid>
                  </Grid>

                  
                  <Grid container spacing={1} >

                    <Grid item xs={3} sm={3} md={3} xl={3}>
                      <Card className={classes.cardWithoutBg}>
                        <Typography align="left" variant="h6"> Every </Typography>
                      </Card>
                    </Grid>

                    <Grid item xs={2} sm={2} md={2} xl={2}>
                      <Card className={classes.cardWithoutBg}>
                        <Box align="center">
                          <TextField id="mount" label="Weeks"  type="number" value={weeks} inputProps={{ min: "0", max:"4"}} style={{ width: 100, color: "white", background: "white" }} onChange={handleWeekFieldChange} />
                        </Box>
                      </Card>
                    </Grid>

                    <Grid item xs={2} sm={2} md={2} xl={2}>
                      <Card className={classes.cardWithoutBg}>
                        <Box align="center">
                          <TextField id="mount" label="Days"  type="number" value={days} inputProps={{ min: "0", max:"6"}} style={{ width: 100, color: "white", background: "white" }} onChange={handleDayFieldChange} />
                        </Box>
                      </Card>
                    </Grid>

                    <Grid item xs={2} sm={2} md={2} xl={2}>
                      <Card className={classes.cardWithoutBg}>
                        <Box align="center">
                          <TextField id="mount" label="Hours"  type="number" value={hours} inputProps={{ min: "0", max:"23"}} style={{ width: 100, color: "white", background: "white" }} onChange={handleHourFieldChange} />
                        </Box>
                      </Card>
                    </Grid>

                    <Grid item xs={2} sm={2} md={2} xl={2}>
                      <Card className={classes.cardWithoutBg}>
                        <Box align="center">
                          <TextField id="mount" label="Minutes"  type="number" value={minutes} inputProps={{ min: "0", max:"59"}} style={{ width: 100, color: "white", background: "white" }} onChange={handleMinuteFieldChange} />
                        </Box>
                      </Card>
                    </Grid>


                  </Grid>

                  <Grid item xs={12} sm={12} md={12} xl={12}>
                    <Grid item xs={12} sm={12} md={12} xl={12}>
                      <Box align="center" className={classes.cardWithoutBg}>
                        <Button type="submit" variant="contained" color="secondary" className={classes.button} > Create Order </Button>
                      </Box>
                    </Grid>
                  </Grid>



                </Grid>
              </form>
            </ Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={4} xl={4} />
        </Grid>
      </Paper>
    </div>
  );
}

const tokensPlaceholder = [
  { symbol: 't0', name: 'token0', address: "0xDccd6455AE04b03d785F12196B492b18129564bc" },
  { symbol: 't1', name: 'token1', address: "0xDccd6455AE04b03d785F12196B492b18129564bc" },
  { symbol: 't2', name: 'token2', address: "0xDccd6455AE04b03d785F12196B492b18129564bc" },
  { symbol: 't3', name: 'token3', address: "0xDccd6455AE04b03d785F12196B492b18129564bc" },
];
