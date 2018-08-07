import React, { Component } from 'react'
import { connect } from 'react-redux'
class Player extends Component {

  state = {
     walkingCycle: 0, // it appears that we don't need this in the global redux state
     xPosition: 240,
     yPosition: 600,
     speed: 4
  }

  handleWalking = (e) => {
    if (e.keyCode === 32) {
      this.state.speed !== 14 ? this.setState({speed: 14}) : this.setState({speed: 4})
    }

    if (e.keyCode > 36 && e.keyCode < 41 ) {
      this.props.canvas.getContext("2d").clearRect(0, 0, this.props.canvas.width, this.props.canvas.height)
      this.setState({walkingCycle: (this.state.walkingCycle+1) % 2}, ()=> {
        if (e.keyCode === 37 && this.state.xPosition - this.state.speed > 0) {
          this.setState({xPosition: this.state.xPosition -= this.state.speed})
        } else if (e.keyCode === 38 && this.state.yPosition - this.state.speed > 0) {
          this.setState({yPosition: this.state.yPosition -= this.state.speed})
        } else if (e.keyCode === 39 && this.state.xPosition + this.state.speed + 50 < this.props.canvas.width) {
          this.setState({xPosition: this.state.xPosition += this.state.speed})
        } else if (e.keyCode === 40 && this.state.yPosition + this.state.speed + 50 < this.props.canvas.height) {
          this.setState({yPosition: this.state.yPosition += this.state.speed})
        }
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

const mapStateToProps = (state) => {
  return {
    canvas: state.canvas
  }
}

export default connect(mapStateToProps)(Player)
