import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router , Route } from 'react-router-dom'
import Home from './pages/Home'

class App extends Component {
  state = {
    searchText: 'search',
    data: []
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
        </div>
      </Router>
    )
  }
}

export default App;
