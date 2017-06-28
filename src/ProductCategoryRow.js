import React, { Component } from 'react';

class ProductCategoryRow extends Component{
    
    constructor(props) {
        super(props);
        this.category = props.category;
    }

    render(){
        return(
            <tr>
                <th>{this.category}</th>
            </tr>
        )
    }
}

export default ProductCategoryRow;