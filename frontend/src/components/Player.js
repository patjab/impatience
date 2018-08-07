import React, { Component } from 'react'
import { connect } from 'react-redux'
import { movePlayer, changeSpeed } from '../actions'

class Player extends Component {

  handleWalking = (e) => {
    if (e.keyCode === 32) {
      this.props.changeSpeed()
    }

    if (e.keyCode > 36 && e.keyCode < 41 ) {
      e.preventDefault()
      if (e.keyCode === 37 && this.props.player.xPosition - this.props.player.speed > 0) {
        this.props.moveLeft()
      } else if (e.keyCode === 38 && this.props.player.yPosition - this.props.player.speed > 0) {
        this.props.moveUp()
      } else if (e.keyCode === 39 && this.props.player.xPosition + this.props.player.speed + 50 < this.props.canvas.width) {
        this.props.moveRight()
      } else if (e.keyCode === 40 && this.props.player.yPosition + this.props.player.speed + 50 < this.props.canvas.height) {
        this.props.moveDown()
      }
    }

  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleWalking)

    const img = this.refs.playerImg
    img.onload = () => {
      this.props.canvas.getContext("2d").drawImage(img, this.props.player.xPosition, this.props.player.yPosition, 50, 50)
    }
  }

  componentDidUpdate() {
    this.props.canvas.getContext("2d").clearRect(this.props.player.xPosition-5, this.props.player.yPosition-5, 60, 60)
    const img = this.refs.playerImg
    img.src = (this.props.player.walkingCycle === 0 ? '../right.png' : '../left.png')
    this.props.canvas.getContext("2d").drawImage(img, this.props.player.xPosition, this.props.player.yPosition, 50, 50)
  }

  render() {
    return (
      this.props.player.walkingCycle === 0 ? <img src='../left.png' ref='playerImg' className='hidden'/> : <img src='../right.png' ref='playerImg' className='hidden'/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    canvas: state.canvas,
    player: state.player,
    backgroundMagnification: state.backgroundMagnification
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    moveUp: () => dispatch(movePlayer(0, 1)),
    moveDown: () => dispatch(movePlayer(0, -1)),
    moveLeft: () => dispatch(movePlayer(-1, 0)),
    moveRight: () => dispatch(movePlayer(1, 0)),
    changeSpeed: () => dispatch(changeSpeed())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
