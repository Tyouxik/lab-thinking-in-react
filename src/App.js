import React, { Component } from 'react';
import './App.css';
import data from './data.json';

import FilterableProductTable from './Components/FilterableProductTable';


export default class App extends Component {
  state = {
    products: data.data,
    query:''
}

setQuery = (query) => {
  this.setState ((state,props)=> ({
      query: query
  }))
}

  render() {
    return (
      <div>
        <FilterableProductTable 
        products={this.state.products} 
        query={this.state.query}
        setQuery={this.setQuery} />
      </div>
    )
  }
}

