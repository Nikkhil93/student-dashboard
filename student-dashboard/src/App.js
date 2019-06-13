import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import StudentData from './containers/StudentData/StudentData';
import Students from './containers/Students/Students';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout>
            <Switch>
              <Route path="/StudentResults" component={Students} />
              <Route path="/" exact component={StudentData} />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
