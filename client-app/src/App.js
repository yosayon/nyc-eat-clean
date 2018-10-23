import React, { Component } from 'react'
import {BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom'
import Home from './pages/Home'
import Restaurants from './pages/Restaurants'
import { request } from 'graphql-request'
import './App.css'

class App extends Component {
  state = {
    searchText: "",
    filter: "All",
    sort: "name",
    pageSize: 0,
    pageNumber: 1,
    data: [],
    count: 0,
    redirect: false,
    loading: false
  }

  // nextPage = () => {
  //   this.setState({
  //     ...this.state,
  //     pageNumber: this.state.pageNumber + 1
  //   })
  // }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.filter !== this.state.filter){
      this.handleSearch()
    }
    if(prevState.sort !== this.state.sort){
      this.handleSearch()
    }
  }

  onChangeFilter = (grade) => {
    this.setState({
      ...this.state,
      filter: grade
    })
  }

  onChangeSort = (sortValue) => {
    this.setState({...this.state, sort: sortValue})
  }

  onChangeSearchText = (e) => {
    this.setState({...this.state, searchText: e.target.value})
  }

  handleSearch = () => {
    this.setState({...this.state, loading: true})
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
          grade,
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
        redirect: true,
        loading: false
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
                redirect={this.state.redirect}
                loading={this.state.loading}
                />}
              />
            <Route
              exact path='/restaurants'
              render={(props) => <Restaurants
                {...props}
                onChangeSearchText={this.onChangeSearchText}
                handleSearch={this.handleSearch}
                onChangeFilter={this.onChangeFilter}
                onChangeSort={this.onChangeSort}
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
