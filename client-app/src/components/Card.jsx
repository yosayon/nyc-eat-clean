import React from 'react'
import seal from '../images/Nyc-seal-blue.png'
import A from '../images/a.png'
import B from '../images/b.png'
import C from '../images/c.png'
import GP from '../images/GP.png'

const style = "height: 200px; width: 100%; display: block;"
const width = "width: 18rem;"

const Card = ({name, cuisine, building, street, boro, zipcode, phone, grade, imageUrl}) => {
  let gradePic = ''
  if(grade === "A"){
    gradePic = <img src={A} className="grade" alt="grade" />
  }else if(grade === "B"){
    gradePic = <img src={B} className="grade" alt="grade" />
  }else if(grade === "C"){
    gradePic = <img src={C} className="grade" alt="grade" />
  }else {
    gradePic = <img src={GP} className="grade" alt="grade" />
  }
  return(
    <div class="card-wrapper pb-5 px-3">
      <div className="grade-card">
        <img src={seal} className="seal" alt="seal" />
        {gradePic}
      </div>
      <div class="card" style={{width}}>
        <img
          className="card-img-top"
          style={{style}}
          src={imageUrl}
          data-holder-rendered="true"
          alt={name}
        />
        <div className="card-body">
          <div className="card-title text-primary">
            {name}
          </div>
          <p className="card-text">
            {cuisine}
            <br />
            {building} {street} {boro} NY {zipcode}
            <br />
            {phone}
          </p>
        </div>
      </div>
    </div>

  )
}

export default Card
