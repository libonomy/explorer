import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'src/layouts';
import { Landing } from 'src/views/landing';
import { HOME } from './Routes';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path={HOME} component={Landing} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
