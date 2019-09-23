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

import TopMenu from './menus/TopMenu';
import Home from './pages/Home';
import About from './pages/About';
import Social from './pages/Social';
import Tour from './pages/Tour';
import Merch from './pages/Merch';



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
            <div id='appMainContainer'>
              <TopMenu />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/social' component={Social} />
                <Route path='/tour' component={Tour} />
                <Route path='/merch' component={Merch} />
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
