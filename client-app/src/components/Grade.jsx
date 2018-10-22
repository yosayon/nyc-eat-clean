import React, { Component } from 'react'
import seal from '../images/Nyc-seal-blue.png'
import './ImageContainer.css'
import './Card.css'
import a from '../images/a.png'
import b from '../images/b.png'
import c from '../images/c.png'
import GP from '../images/GP.png'

export default class Grade extends Component {
  render(){
    return(
        <div className="grade-card">
          <img
            src={seal}
            className="seal"
          />
          <img
            src={a}
            className="grade"
          />
        </div>
    )
  }
}
