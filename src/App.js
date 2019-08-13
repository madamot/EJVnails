import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Contact from './components/Contact';
import Customiser from './components/Customiser';



class App extends Component {
  render() {
  return (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/contact' component={Contact} />
        <Route path='/customiser' component={Customiser} />
      </Switch>
    </BrowserRouter>
  </div>
    );
  }
}


export default App;
