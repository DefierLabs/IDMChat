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

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Store from './store'

import Bar from './Components/Bar.js';
import ChatPage from './Pages/ChatPage.js';
import Footer from './Components/Footer.js';
import ConversationLoader from './Components/ConversationLoader.js';

//https://coolors.co/d8f3dc-b7e4c7-95d5b2-74c69d-52b788-40916c-2d6a4f-1b4332-081c15

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212529',
    },
    secondary: {
      main: '#6c757d',
    },
    background: {
      default: "#212529"
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Store>
          <ConversationLoader/>
          <div className="App">
            <Bar />
            <Router>
              <Switch>
                <Route path="/">
                  <ChatPage />
                </Route>
              </Switch>
            </Router>
            <Footer />
          </div>
        </Store>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
