import React, { Component } from 'react';
import SearchBar from '../Components/SearchBar';
import ProductTable from '../Components/ProductTable';
import data from '../data.json'

export default class FilterableProductTable extends Component {
    
    render() {
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar query={this.props.query} setQuery={this.props.setQuery}/>
                <ProductTable data={this.props.products} query={this.props.query}/>
            </div>
        )
    }
}
