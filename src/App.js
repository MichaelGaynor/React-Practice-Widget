import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import Toggle from './Toggle';
import MyForm from './MyForm';
import Calculator from './Calculator';

class App extends Component {

  constructor(props) {
    super(props);
    this.products = props.products;
  }

  render() {

    return(
      <Calculator/>
    )

    return(
      <MyForm/>
    )

    return (
      <div className="App container">
        <SearchBar/>
        <ProductTable products={this.products}/>
        <Toggle/>
      </div>
    );
  }
}

export default App;
