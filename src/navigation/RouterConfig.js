import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Layout } from 'src/layouts';
import { Blocks } from 'src/views/blocks';
import { Landing } from 'src/views/landing';
import { app } from './Routes';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            {app.map((route, i) => (
              <Route exact path={route.path} component={route.component} />
            ))}
            <Redirect to="not-found" />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
