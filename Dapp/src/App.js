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
