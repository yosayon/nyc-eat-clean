import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default class Home extends Component{
  render(){
    return(
      <div>
        <Navbar />
        <div className="container">
          <h2> Welcome </h2>
        <Footer />
        </div>
      </div>
    )
  }
}
