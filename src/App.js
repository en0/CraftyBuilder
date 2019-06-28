import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from "./themes/default";
import ProjectListView from "./layouts/ProjectListView";
import ProjectDetailView from "./layouts/EditorView";

const App = () => (
  <ThemeProvider theme={theme}>
      <CssBaseline />
      <header>
          <Router>
              <Switch>
                  <Route exact path="/" component={ProjectListView}/>
                  <Route path="/detail/:id" component={ProjectDetailView} />
              </Switch>
          </Router>
      </header>
  </ThemeProvider>
);

export default App;
