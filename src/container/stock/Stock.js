import React, { Component } from 'react'

export default class Stock extends Component {
  render() {
    return (
      <div>
        {!this.props.isLogined && <div>Access denied</div>}
        {this.props.isLogined && 
        <div>
          재고는?  
        </div>}
      </div>
    )
  }
}
