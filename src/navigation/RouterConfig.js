import React, { Component } from 'react';

import landing from '../views/landing/Landing';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '../components/layout';
// import '../styles/css/index.css';
// import 'react-circular-progressbar/dist/styles.css';

// import Searchbox from "./HomeExplorer/components/SearchBox";

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={landing} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
