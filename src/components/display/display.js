import React from 'react'

import './display.css'

class Display extends React.Component {
  render() {
    const string = this.props.data
    return <div className="display"> {string} </div>
  }
}

export default Display