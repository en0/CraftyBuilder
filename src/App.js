import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from "./themes/default";
import PingButton from "./containers/PingButton";


function App() {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <header className="App-header">
              <h2>hello</h2>
              <PingButton />
          </header>
      </ThemeProvider>
  );
}

export default App;
