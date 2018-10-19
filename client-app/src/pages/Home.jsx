import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Search from '../components/Search'
import ImageContainer from '../components/ImageContainer'
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
            <ImageContainer />
          </div>
        <Footer />
      </div>
    )
  }
}
