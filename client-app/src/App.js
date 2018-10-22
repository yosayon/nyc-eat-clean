import React, { Component } from 'react'
import {BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom'
import Home from './pages/Home'
import Restaurants from './pages/Restaurants'
import { request } from 'graphql-request'

class App extends Component {
  state = {
    searchText: "",
    filter: "All",
    sort: "name",
    pageSize: 10,
    pageNumber: 2,
    data: [],
    count: 0,
    redirect: false
  }

  onChangeFilter = (grade) => {
    this.setState({...this.state, filter: grade})
    console.log(this.state)
  }

  onChangeSearchText = (e) => {
    this.setState({...this.state, searchText: e.target.value})
    console.log(this.state)
  }

  handleSearch = () => {
    const query =
      `query getRestaurants($text: String!, $filter: String, $sort: String, $pageSize: Int, $pageNumber: Int){
        searchText(text: $text, filter: $filter, sort: $sort, pageSize: $pageSize, pageNumber: $pageNumber){
          name
          cuisine
          street
          boro
          zipcode
          phone
          imageUrl
          grade
        }
      }`
    const variables = {
      text: this.state.searchText,
      filter: this.state.filter,
      sort: this.state.sort,
      pageSize: this.state.pageSize,
      pageNumber: this.state.pageNumber
    }

    request('http://localhost:3001/graphql', query, variables)
    .then(data => {
      this.setState({
        ...this.state,
        data: data.searchText,
        count: data.searchText.length,
        redirect: true
      })
    })
  }

  render() {
    const { redirect } = this.state
    return (
      <BrowserRouter>
        <Switch>
            <Route
              exact path='/'
              render={(props) => <Home
                {...props}
                onChangeSearchText={this.onChangeSearchText}
                handleSearch={this.handleSearch}
                onChangeFilter={this.onChangeFilter}
                filter={this.state.filter}
                searchText={this.state.searchText}
                filter={this.state.filter}
                redirect={this.state.redirect}
                />}
              />
            <Route
              exact path='/restaurants'
              render={(props) => <Restaurants
                {...props}
                searchText={this.state.searchText}
                filter={this.state.filter}
                sort={this.state.sort}
                pageSize={this.state.pageSize}
                pageNumber={this.state.pageNumber}
                data={this.state.data}
                count={this.state.count}
                />
              }
            />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
