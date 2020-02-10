import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'

import { Switch, Route } from 'react-router-dom'
import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

class App extends Component {

  render(){

    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/detail/:movieId' component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
