const initialState = {
  canvas: null,
  player: {
    xPosition: 480/2,
    yPosition: 400-100,
    speed: 4,
    walkingCycle: 0,
    walkingCollection: ['../right.png', '../left.png']
  },
  obstacles: []
}

const controlCanvas = (state = initialState, action) => {
  switch(action.type) {
    case "SET_CANVAS":
      return {...state, canvas: action.payload}
    case "MOVE_PLAYER":
      return {
        ...state,
        player: {
          ...state.player,
          xPosition: state.player.xPosition + (action.payload.x*state.player.speed),
          yPosition: state.player.yPosition + (action.payload.y*state.player.speed),
          walkingCycle: (state.player.walkingCycle+1) % state.player.walkingCollection.length
        },
      }
    case "CHANGE_SPEED":
      return {
        ...state,
        player: {
          ...state.player,
          speed: state.player.speed !== 12 ? 12 : 4
        }
      }
    default:
      return state
  }
}



export default controlCanvas
