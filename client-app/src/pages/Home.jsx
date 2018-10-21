import React, { Component } from 'react'
import Search from '../components/Search'
import ImageContainer from '../components/ImageContainer'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Home.css'

export default class Home extends Component{
  state = {
    location: "home"
  }
  render(){
    return(
      <div>
        <Navbar location={this.props.location}/>
        <div className="homepage-container">
          <div>
            <Search
            />
          </div>
            <ImageContainer />
          </div>
          <Footer />
      </div>
    )
  }
}
