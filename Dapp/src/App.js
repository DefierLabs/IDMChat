import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Bar from './Components/Bar.js';
import DCAPage from './Pages/DCAPage.js';
import ChatPage from './Pages/ChatPage.js';
import Footer from './Components/Footer.js';

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
        <div className="App">
          <Bar />
          <Router>
            <Switch>
              <Route path="/About">
                <DCAPage />
              </Route>
              <Route path="/">
                <ChatPage />
              </Route>
            </Switch>
          </Router>
          <Footer />
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
