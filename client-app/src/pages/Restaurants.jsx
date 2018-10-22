import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import './Restaurants.css'

export default class Restaurants extends Component{

  render(){
    const { data } = this.props
    const restaurants = [];
    if(data){
      data.map((r,i) => restaurants.push(<Card id={i} name={r.name} cuisine={r.cuisine} building={r.building} street={r.street} boro={r.boro} zipcode={r.zipcode} phone={r.phone} imageUrl={r.imageUrl} grade={r.grade}/>))
    }
    return(
      <div className="restaurants-page-container">
        <Navbar
          location={this.props.location}
          searchText={this.props.searchText}
        />

          <div className="header-container">
            <div className="header-image-container">
              <h1>SEARCH: {this.props.searchText}</h1>
            </div>
          </div>

          <div class="sort-filter-container">
            <div className="sort-filter">
              <div class="btn-group">
                <button class="btn btn-info btn-sm dropdown-toggle " type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                  Grade
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="/">A</a>
                  <a class="dropdown-item" href="/">B</a>
                  <a class="dropdown-item" href="/">C</a>
                  <a class="dropdown-item" href="/">Z</a>
                  <a class="dropdown-item" href="/">Not Yet Graded</a>
                </div>
              </div>
              <div class="btn-group">
                <button class="btn btn-info btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Sort
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="/">Name</a>
                  <a class="dropdown-item" href="/">Cuisine</a>
                  <a class="dropdown-item" href="/">Borough</a>
                </div>
              </div>
            </div>
            <div>
              {this.props.count} results found
            </div>
          </div>


          <div class="restaurant-cards-container py-5 px-5 mb-sm-4 bg-light">
            {restaurants}
          </div>

          <div className="pagination-container">
            <nav aria-label="...">
              <ul className="pagination">
                <li className="page-item disabled"><a className="page-link" href="#" tabindex="-1">Previous</a></li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item active"><a className="page-link" href="#">2 <span className="sr-only">(current)</span></a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
              </ul>
            </nav>

          </div>
        <Footer />
      </div>
    )
  }
}
