import React, { Component } from 'react'
import {NavLink, withRouter} from 'react-router-dom'

@withRouter
class Title extends Component {
  // 后退
  back = () => {
    console.log('Title',this);
    this.props.history.goBack()
  }
  // 前进
  goto = () => {
    this.props.history.goForward()
  }
  render () {
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={this.back}>《=后退</button>
        <button onClick={this.goto}>前进=》</button>
      </div>
    )
  }
}
export default Title
