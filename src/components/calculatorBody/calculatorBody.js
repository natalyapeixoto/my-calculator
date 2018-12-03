import React from 'react'
import Button from '../button'

import './calculatorBody.css'


class CalculatorBody extends React.Component {
  render() {
    return(
     <div className="calc-body"> {this.props.children} </div>
      )
    }
}

export default CalculatorBody