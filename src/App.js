import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home.js';
import Book from './components/Book';
import Customiser from './components/Customiser/Customiser.js';



class App extends Component {
  render() {
  return (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/book' component={Book} />
        <Route path='/customiser' component={Customiser} />
      </Switch>
    </BrowserRouter>
  </div>
    );
  }
}


export default App;
