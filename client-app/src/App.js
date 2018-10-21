import React, { Component } from 'react'
import axios from 'axios'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Restaurants from './pages/Restaurants'

class App extends Component {
  state = {
    searchText: 'search',
    location: "home",
    data: []
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/restaurants' component={Restaurants}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
