import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import { request } from 'graphql-request'

export default class Restaurants extends Component{

  shouldComponentUpdate = (nextProps) => {
    if(nextProps.data !== this.props.data){
      return true;
    }else{
      return false;
    }
  }

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
          onChangeSearchText={this.props.onChangeSearchText}
          handleSearch={this.props.handleSearch}
        />

          <div className="header-container">
            <div className="header-image-container">
              <div className="header-text">
                <div className="search-text">
                  SEARCH:
                </div>
                <div className="search-result">
                  {this.props.searchText}
                </div>
              </div>
            </div>
          </div>

          <div class="sort-filter-container">
            <div className="sort-filter">
              <div class="btn-group">
                <button class="btn btn-info btn-sm dropdown-toggle " type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                  {this.props.filter}
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" onClick={() => this.props.onChangeFilter("All")}>All</a>
                  <a className="dropdown-item" onClick={() => this.props.onChangeFilter("A")} >A</a>
                  <a className="dropdown-item" onClick={() => this.props.onChangeFilter("B")} >B</a>
                  <a className="dropdown-item" onClick={() => this.props.onChangeFilter("C")} >C</a>
                </div>
              </div>
              <div class="btn-group">
                <button class="btn btn-info btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {this.props.sort}
                </button>
                <div class="dropdown-menu">
                  <a className="dropdown-item" onClick={() => this.props.onChangeSort("name")} >name</a>
                  <a className="dropdown-item" onClick={() => this.props.onChangeSort("grade")} >grade</a>
                  <a className="dropdown-item" onClick={() => this.props.onChangeSort("boro")} >boro</a>
                  <a className="dropdown-item" onClick={() => this.props.onChangeSort("cuisine")} >cuisine</a>
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
                <li className="page-item"><a className="page-link" href="#">2 <span className="sr-only">(current)</span></a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                  <a className="page-link" >Next</a>
                </li>
              </ul>
            </nav>

          </div>
        <Footer />
      </div>
    )
  }
}
