import React, { Component } from 'react';

class SearchBar extends Component{
    render(){
        return(
            <div className="row">
                <form>
                    <div className="col-sm-10 col-sm-offset-1">
                        <input type="text" placeholder="Search..."/>
                    </div>
                    <div className="col-sm-10 col-sm-offset-1">
                        <input type="checkbox"/> Only show products in stock
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;