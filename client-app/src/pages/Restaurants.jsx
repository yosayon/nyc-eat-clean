import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import './Restaurants.css'

export default class Restaurants extends Component{
  render(){
    return(
      <div className="restaurants-page-container">
        <Navbar location={this.props.location}/>
        <div className="header-container">
          <div className="header-image-container">
            HI this is my header
          </div>
        </div>
        <div class="restaurant-cards-container">

        <div class="sort-filter-container">
          <div class="btn-group">
            <button class="btn btn-info btn-sm dropdown-toggle " type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
          Grade
            </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/">A</a>
                <a class="dropdown-item" href="/">B</a>
                <a class="dropdown-item" href="/">C</a>
                <a class="dropdown-item" href="/">Z</a>
                <a class="dropdown-item" href="/">Not Yet Graded</a>
              </div>
          </div>
          <div class="btn-group">
            <button class="btn btn-info btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sort
            </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/">Name</a>
                <a class="dropdown-item" href="/">Cuisine</a>
                <a class="dropdown-item" href="/">Borough</a>
              </div>
            </div>
          </div>
          <Card />

        </div>
        <Footer />
      </div>
    )
  }
}
