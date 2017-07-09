import React from 'react'
import TemperatureInput from './TemperatureInput'

import BoilingVerdict from './BoilingVerdict'

class Calculator extends React.Component{
  constructor() {
    super();
    this.state = {temperature: ''};
  }

  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}

export default Calculator