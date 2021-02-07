import { GameView, SystemAction, SystemActionKey, SystemState } from '$front/types'
import { isSystemAction, reducer } from '$front/utils'
import { checkExhaustive } from '$game/utils'

const initialState: SystemState = {
  gameView: GameView.MainMenu,
}

const setGameView = (gameView: GameView) => (state: SystemState): SystemState => ({
  gameView,
})

export default reducer<SystemState, SystemAction>(
  initialState,
  isSystemAction
)((state, action) => {
  switch (action.type) {
    case SystemActionKey.CHANGE_GAMEVIEW:
      return setGameView(action.payload)(state)
  }
  return checkExhaustive(action.type)
})
