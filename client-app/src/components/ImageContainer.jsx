import React from 'react'
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
            className="seal-home"
          />
          <img
            src={a}
            className="grade-home"
          />
        </div>
        <div className="grade-card-home">
          <img
            src={seal}
            className="seal-home"
          />
          <img
            src={b}
            className="grade-home"
          />
        </div>
        <div className="grade-card-home">
          <img
            src={seal}
            className="seal-home"
          />
          <img
            src={c}
            className="grade-home"
          />
        </div>
        <div className="grade-card-home">
          <img
            src={seal}
            className="seal-home"
          />
          <img
            src={GP}
            className="grade-pending-home"
          />
        </div>
      </div>
    </div>
  )
}

export default ImageContainer
