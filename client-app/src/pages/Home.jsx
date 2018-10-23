import React, { Component } from 'react'
import Search from '../components/Search'
import ImageContainer from '../components/ImageContainer'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
import { Route, Redirect } from 'react-router-dom'
import Restaurants from './Restaurants'

export default class Home extends Component{
  render(){
    const {redirect} = this.props
    if(redirect){
      return <Redirect to="/restaurants" />
    }
    return(
      <div>
        <Navbar location={this.props.location}/>
        <div className="homepage-container">
          <div>
            <Search
              searchText={this.props.searchText}
              onChangeSearchText={this.props.onChangeSearchText}
              handleSearch={this.props.handleSearch}
              filter={this.props.filter}
              onChangeFilter={this.props.onChangeFilter}
            />
          </div>
            <ImageContainer />
          </div>
          <Footer />
      </div>
    )
  }
}
