import React, { Component } from 'react';

class ProductRow extends Component{

    constructor(props) {
        super(props);
        this.givenItem = props.givenItem;
    }

    render(){
        var productClass = "";
        if (this.givenItem.inStock === true){
            productClass = "text-success"
        }else{
            productClass = "text-danger"
        }
        return(
            <tr>
                <td className={productClass}>{this.givenItem.name}</td>
                <td>{this.givenItem.price}</td>
            </tr>
        )
    }
}

export default ProductRow;