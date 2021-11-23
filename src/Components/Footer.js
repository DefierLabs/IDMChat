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

import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';

import GlobalStyles from '../GlobalStyles';

export default function Footer() {
  const classes = GlobalStyles();
  return (
    <div className="Footer">
      <Paper className={classes.headerPaper}>
        <Divider color="inherit"/>
        <Card className={classes.cardWithoutBg}>
          <Typography align="center"> This is a public good. Please report all bugs to the <Link href="https://github.com/DefierLabs/IDMChat">Github</Link>. if you find it useful, please donate to 0xe0a09b49721FBD8B23c67a3a9fdE44be4412B8fD</Typography>
          <Typography align="center"> Buidl With ❤️ by <Link href="https://github.com/defierlabs">😈</Link> for <Link href="https://showcase.ethglobal.com/web3jam/idmchat">🕸3️⃣🍯🍓</Link></Typography>
        </Card>
      </Paper>
    </div>
  );
}
