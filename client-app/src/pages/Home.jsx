import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import homepage from '../images/homepage.jpg'
import Search from '../components/Search'
import './Home.css'

export default class Home extends Component{
  render(){
    return(
      <div>
        <Navbar />
        <div className="homepage-container">
          <div>
            <Search />
          </div>
          <div className="image-container">
            <img
              src={homepage}
              className="homepage-image"
              alt="homepage"
            />
          </div>
          </div>
        <Footer />
      </div>
    )
  }
}
