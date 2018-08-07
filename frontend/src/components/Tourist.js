import React, { Component } from 'react'
import { connect } from 'react-redux'

const Tourist = class extends Component {
  componentDidMount() {
    const img = this.refs.touristImg
    img.onload = () => {
      this.props.canvas.getContext("2d").drawImage(img, 210, 120, 50*1.0015*this.props.backgroundMagnification, 50*1.0015*this.props.backgroundMagnification)
    }
  }

  componentDidUpdate() {
    this.props.canvas.getContext("2d").clearRect(210-5, 120-5, (50*1.0015*this.props.backgroundMagnification)+10, (50*1.0015*this.props.backgroundMagnification)+10)

    const img = this.refs.touristImg
    this.props.canvas.getContext("2d").drawImage(img, 210, 120, 50*1.0015*this.props.backgroundMagnification, 50*1.0015*this.props.backgroundMagnification)
  }

  render() {
    return <img src='../mewTourist.gif' ref='touristImg' className='hidden'/>
  }
}

const mapStateToProps = (state) => {
  return {
    canvas: state.canvas,
    backgroundMagnification: state.backgroundMagnification
  }
}

export default connect(mapStateToProps)(Tourist)
