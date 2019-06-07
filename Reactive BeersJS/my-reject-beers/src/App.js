import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './scenes/Home'
import Beers from './scenes/Beers'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/beers' component={Beers} />
        <Route exact path='/random-beer' component={Home} />
        <Route exact path='/new-beer' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
