import React, { Component, Fragment } from 'react'
import { setThisCanvas } from '../actions.js'
import { connect } from 'react-redux'
import Player from './Player'

class Canvas extends Component {

  componentDidMount() {
    this.props.setCanvas(this.refs.playarea)
    this.refs.playarea.style = `background: url('../3dBrooklynBridge.jpg'); background-size: ${480*this.props.backgroundMagnification}px; background-position: center;`
  }

  componentDidUpdate() {
    this.refs.playarea.style = `background: url('../3dBrooklynBridge.jpg'); background-size: ${480*this.props.backgroundMagnification}px; background-position: center;`
  }

  // background-size: 700px 260px;
  // background-position: center;

  render() {
    return (
      <Fragment>
        <canvas ref='playarea' width="480" height="300"></canvas>
        <Player/>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    backgroundMagnification: state.backgroundMagnification
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCanvas: (canvas) => { dispatch(setThisCanvas(canvas)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas)
