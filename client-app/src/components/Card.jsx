import React from 'react'
import sample from '../images/homepage.jpg'
import Grade from './Grade'
import './Card.css'

const style = "height: 200px; width: 100%; display: block;"
const width = "width: 18rem;"


const Card = () => {
  return(
    <div class="card-wrapper pb-5 px-3">
      <div class="card" style={{width}}>
        <img
          className="card-img-top"
          style={{style}}
          src={sample}
          data-holder-rendered="true"
          alt="photo"
        />
        <div className="card-body">
          <div className="card-title text-primary">
            Los Tacos No. 1
          </div>
          <p className="card-text">
            Restaurant Name
            <br />
            Restaurant Address
            <br />
            Phone number
          </p>
        </div>
      </div>
    </div>

  )
}

export default Card
