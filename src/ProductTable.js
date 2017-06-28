import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends Component{

    constructor(props) {
        super(props);
        this.products = props.products;
    }

    render(){
        var rows = [];
        var lastCat = "";
        var key = 0;
        this.products.map((currProduct, index)=>{
            if(currProduct.category !== lastCat){
                rows.push(<ProductCategoryRow key={key} category={currProduct.category}/>)
                lastCat = currProduct.category;
                key++;
            }
            rows.push(<ProductRow key={key} givenItem={currProduct}/>)
            key++;
        return true;
        })

        return(
            <div className="col-sm-6 col-sm-offset-3">
                <table className="table table-striped table-condensed">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductTable;