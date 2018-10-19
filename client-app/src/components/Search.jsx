import React, { Component } from 'react'
import './Search.css'

export default class Search extends Component{
  render(){
    return(
      <div className="search-container">
        <div className="nyc-restaurants">NYC RESTAURANTS</div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-secondary input-group-text"
              id="basic-addon1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"> All &#8595;
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="/">A</a>
              <a class="dropdown-item" href="/">B</a>
              <a class="dropdown-item" href="/">C</a>
            </div>
          </div>
          <input
            type="text"
            class="form-control"
          />
          <button
            type="button"
            class="btn btn-success">
            Search
          </button>
        </div>
      </div>
    )
  }
}
