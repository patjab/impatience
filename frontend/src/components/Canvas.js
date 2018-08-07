import React, { Component, Fragment } from 'react'
import Player from './Player'

export default class Canvas extends Component {

  // move the context drawer to redux state
  state = {
    canvas: null
  }


  componentDidMount() {
    this.setState({canvas: this.refs.playarea})
  }

  render() {
    return (
      <Fragment>
        <canvas ref='playarea' width="480" height="320"></canvas>
        <Player canvas={this.state.canvas}/>
      </Fragment>
    )
  }

}
