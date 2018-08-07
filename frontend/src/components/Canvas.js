import React, { Component, Fragment } from 'react'
import { setThisCanvas } from '../actions.js'
import { connect } from 'react-redux'
import Player from './Player'

class Canvas extends Component {

  componentDidMount() {
    this.props.setCanvas(this.refs.playarea)
    this.refs.playarea.style="background: url('../3dBrooklynBridge.jpg'); background-size: 480px; background-repeat: no-repeat;"
  }

  render() {
    return (
      <Fragment>
        <canvas ref='playarea' width="480" height="400"></canvas>
        <Player/>
      </Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCanvas: (canvas) => { dispatch(setThisCanvas(canvas)) }
  }
}

export default connect(null, mapDispatchToProps)(Canvas)
