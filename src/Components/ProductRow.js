import React, { Component } from 'react'

export default class ProductRow extends Component {
    render() {
        const filteredList = this.props.data.filter(product => {
            return product.name.toLowerCase().includes(this.props.query.toLowerCase())
        })

        const products = filteredList.map(product => {
console.log("This is my query", this.props.query)
            return (
                <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
            );
        });

        return (
            <>
            {products}
            </>
        )
        
    }
}
