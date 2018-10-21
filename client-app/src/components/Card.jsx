import React from 'react'
import sample from '../images/homepage.jpg'
const style = "height: 200px; width: 100%; display: block;"

const Card = () => {
  return(
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                style={{style}}
                src={sample}
                data-holder-rendered="true"/>
               <div className="card-body">
                <p className="card-text">Los Tacos No. 1</p>
                <p className="card-text">Mexican</p>
                <p className="card-text">251 W 50th St, New York, NY 10019</p>
                <p className="card-text">(212) 581-1818</p>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Card
