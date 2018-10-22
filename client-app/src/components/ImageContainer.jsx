import React from 'react'
import './ImageContainer.css'
import seal from '../images/Nyc-seal-blue.png'
import a from '../images/a.png'
import b from '../images/b.png'
import c from '../images/c.png'
import GP from '../images/GP.png'

const ImageContainer = () => {
  return(
    <div className="image-container">
      <div className="image-card-container">
        <div className="grade-card-home">
          <img
            src={seal}
            className="seal"
          />
          <img
            src={a}
            className="grade"
          />
        </div>
        <div className="grade-card-home">
          <img
            src={seal}
            className="seal"
          />
          <img
            src={b}
            className="grade"
          />
        </div>
        <div className="grade-card-home">
          <img
            src={seal}
            className="seal"
          />
          <img
            src={c}
            className="grade"
          />
        </div>
        <div className="grade-card-home">
          <img
            src={seal}
            className="seal"
          />
          <img
            src={GP}
            className="grade-pending"
          />
        </div>
      </div>
    </div>
  )
}

export default ImageContainer
