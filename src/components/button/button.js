import React from 'react'
import './button.css'

class Button extends React.Component {
  constructor(props){
    super(props)
  }

  render (){
    return(
    <button 
    onClick={this.props.onClick} 
    className='button'
    data-size={this.props.size}
    data-value={this.props.value}>
    {this.props.label}
    </button>
    )
  }
}

export default Button 