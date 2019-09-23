import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect,
  Router
} from 'react-router-dom';
import { ScrollManager, WindowScroller } from 'react-scroll-manager';
import { createBrowserHistory as createHistory } from 'history';
import './App.css';

import Home from './pages/Home';


class App extends Component {

  componentDidMount() {
    document.title='Untitled_Band'
  }

  constructor() {
    super();
    this.history = createHistory();
  }

  render() {
    return (
      <ScrollManager history={this.history}>
        <Router history={this.history}>
          <WindowScroller>
            <div>
              <Switch>
                <Route exact path='/' component={Home} />
                <Redirect to='/' />
              </Switch>
            </div>
          </WindowScroller>
        </Router>
      </ScrollManager>
    );
  }
}

export default App;
