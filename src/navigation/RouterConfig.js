import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'src/layouts';
import history from 'src/utils/history';
import { app } from './Routes';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Layout>
          <Switch>
            {app.map((route, i) => (
              <Route exact path={route.path} component={route.component} />
            ))}
            <Redirect to="/not_found" />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
