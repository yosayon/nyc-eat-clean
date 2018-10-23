import React, { Component } from 'react'

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
              aria-expanded="false"> {this.props.filter} &#8595;
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" onClick={() => this.props.onChangeFilter("All")}> All</a>
              <a className="dropdown-item" onClick={() => this.props.onChangeFilter("A")} >A</a>
              <a className="dropdown-item" onClick={() => this.props.onChangeFilter("B")} >B</a>
              <a className="dropdown-item" onClick={() => this.props.onChangeFilter("C")} >C</a>
            </div>
          </div>
          <input
            type="text"
            class="form-control"
            value={this.props.searchText}
            onChange={(e) => this.props.onChangeSearchText(e)}
          />
          <button
            type="button"
            class="btn btn-success"
            onClick={this.props.handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    )
  }
}
