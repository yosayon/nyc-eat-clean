import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import headerPic from '../images/restaurant-header.jpg'
import './Restaurants.css'


export default class Restaurants extends Component{
  render(){
    return(
      <div className="restaurants-page-container">
        <Navbar location={this.props.location}/>
        <div className="header-container">
          <div className="header-image-container">

          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
