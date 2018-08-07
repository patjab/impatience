import React, { Component } from 'react'

export default class Player extends Component {

  state = {
     walkingCycle: 0, // it appears that we don't need this in the global redux state
     xPosition: 0,
     yPosition: 0
  }

  handleWalking = (e) => {
    this.props.canvas.getContext("2d").clearRect(0, 0, this.props.canvas.width, this.props.canvas.height)

    if (e.keyCode === 37) {
      this.setState({
          walkingCycle: (this.state.walkingCycle+1) % 2,
          xPosition: this.state.xPosition -= 7
      })
    } else if (e.keyCode === 38) {
      this.setState({
          walkingCycle: (this.state.walkingCycle+1) % 2,
          yPosition: this.state.yPosition -= 7
      })
    } else if (e.keyCode === 39) {
      this.setState({
          walkingCycle: (this.state.walkingCycle+1) % 2,
          xPosition: this.state.xPosition += 7
      })
    } else if (e.keyCode === 40) {
      this.setState({
          walkingCycle: (this.state.walkingCycle+1) % 2,
          yPosition: this.state.yPosition += 7
      })
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleWalking)

    const img = this.refs.playerImg // FIX THIS to make refs
    img.onload = () => {
      this.props.canvas.getContext("2d").drawImage(img, this.state.xPosition, this.state.yPosition, 50, 50)
    }
  }

  render() {
    return (
      this.state.walkingCycle === 0 ? <img src='../left.png' ref='playerImg' className='hidden'/> : <img src='../right.png' ref='playerImg' className='hidden'/>
    )
  }
}
