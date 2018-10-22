import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import thomasLogo from '../images/thomas_logo.png'

export default class Navbar extends Component{

  state = {
    location: this.props.location.pathname
  }

  render(){
    return(
      <nav className="navbar">
        <a className="navbar-brand" href="/">
           <img className="thomas-logo" src={thomasLogo}/>
        </a>
        {this.state.location === "/restaurants" ?
        (<div className="input-container">
          <input className="input" type="text" placeholder={this.props.searchText}/>
          <div className="icon-container">
            <i className="fa fa-search fa-cog" aria-hidden="true"></i>
          </div>
        </div>) : null}

      </nav>
    )
  }
}
