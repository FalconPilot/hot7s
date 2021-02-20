import { remote } from 'electron'

import { GameOverlay, GameView, SystemAction, SystemActionKey, SystemState } from '$front/types'
import { isSystemAction, reducer } from '$front/utils'
import { AppOptions } from '$game/types'
import { checkExhaustive } from '$game/utils'
import { initialGameState } from '$game/constants'

const options: AppOptions = remote.getGlobal('options')

const initialState: SystemState = {
  gameView: GameView.MainMenu,
  gameState: initialGameState,
  gameOverlays: [],
  options,
}

const setGameView = (gameView: GameView) => (state: SystemState): SystemState => ({
  ...state,
  gameView,
})

const addOverlay = (overlay: GameOverlay) => (state: SystemState): SystemState => ({
  ...state,
  gameOverlays: state.gameOverlays.concat([overlay]),
})

const removeOverlay = (state: SystemState): SystemState => ({
  ...state,
  gameOverlays: state.gameOverlays.slice(0, -1),
})

const setOptions = (options: AppOptions) => (state: SystemState): SystemState => ({
  ...state,
  options,
})

const newGame = (state: SystemState): SystemState => ({
  ...state,
  gameView: GameView.IllustratedScene,
  gameState: initialGameState,
})

export default reducer<SystemState, SystemAction>(
  initialState,
  isSystemAction
)((state, action) => {
  switch (action.type) {
    case SystemActionKey.CHANGE_GAMEVIEW:
      return setGameView(action.payload)(state)
    case SystemActionKey.ADD_OVERLAY:
      return addOverlay(action.payload)(state)
    case SystemActionKey.REMOVE_OVERLAY:
      return removeOverlay(state)
    case SystemActionKey.SAVE_OPTIONS:
    case SystemActionKey.UPDATE_OPTIONS:
      return setOptions(action.payload)(state)
    case SystemActionKey.NEW_GAME:
      return newGame(state)

    // NoOps
    case SystemActionKey.GAME_QUIT:
      return state
  }
  return checkExhaustive(action)
})
