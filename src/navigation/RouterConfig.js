import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'src/layouts';
import history from 'src/utils/history';
import { app } from './Routes';
import { ScrollReset } from 'src/components';
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <ScrollReset />
        <Layout>
          <Switch>
            {app.map((route, i) => (
              <Route
                exact
                path={route.path}
                component={route.component}
                key={i}
              />
            ))}
            <Redirect to="/not_found" />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
