import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import thomasLogo from '../images/thomas_logo.png'

export default class Navbar extends Component{
  render(){
    return(
      <nav className="navbar">
        <a className="navbar-brand" href="#">
           <img className="thomas-logo" src={thomasLogo}/>
        </a>
      </nav>
    )
  }
}
