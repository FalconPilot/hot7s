import { RGBA } from '@figouzes/falcon-css'

import { GuiAction, GuiActionKey, GuiState } from '$front/types'
import { composeStateChanges, isGuiAction, reducer } from '$front/utils'
import { checkExhaustive } from '$game/utils'

const initialState: GuiState = {
  veilColor: [0, 0, 0, 0],
  veilTransitionTime: 0,
  blockInteractions: false,
}

const setVeilColor = (color: RGBA) => (state: GuiState): GuiState => ({
  ...state,
  veilColor: color,
})

const setVeilOpacity = (opacity: number) => (state: GuiState): GuiState =>
  setVeilColor([state.veilColor[0], state.veilColor[1], state.veilColor[2], opacity])(state)

const showVeil = setVeilOpacity(1)
const hideVeil = setVeilOpacity(0)

const setVeilTransitionTime = (time: number) => (state: GuiState): GuiState => ({
  ...state,
  veilTransitionTime: time,
})

const setInteractionsBlocking = (status: boolean) => (state: GuiState): GuiState => ({
  ...state,
  blockInteractions: status,
})

const blockInteractions = setInteractionsBlocking(true)
const unblockInteractions = setInteractionsBlocking(false)

export default reducer<GuiState, GuiAction>(
  initialState,
  isGuiAction
)((state, action) => {
  switch (action.type) {
    case GuiActionKey.FADEIN:
      return composeStateChanges([hideVeil, setVeilTransitionTime(action.payload)])(state)
    case GuiActionKey.FADEOUT:
      return composeStateChanges([showVeil, setVeilTransitionTime(action.payload)])(state)
    case GuiActionKey.SET_COLOR:
      return composeStateChanges([
        setVeilColor(action.payload[0]),
        setVeilTransitionTime(action.payload[1]),
      ])(state)
    case GuiActionKey.BLOCK_INTERACTIONS:
      return blockInteractions(state)
    case GuiActionKey.UNBLOCK_INTERACTIONS:
      return unblockInteractions(state)
  }
  return checkExhaustive(action)
})
