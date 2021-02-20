import { GuiAction, GuiActionKey, GuiState } from '$front/types'
import { composeStateChanges, isGuiAction, reducer } from '$front/utils'
import { checkExhaustive } from '$game/utils'
import { RGBA } from '@figouzes/falcon-css'

const initialState: GuiState = {
  veilColor: [0, 0, 0, 0],
  veilTransitionTime: 0,
}

const setVeilColor = (color: RGBA) => (state: GuiState): GuiState => ({
  ...state,
  veilColor: color,
})

const setVeilOpacity = (opacity: number) => (state: GuiState): GuiState => (
  setVeilColor([
    state.veilColor[0],
    state.veilColor[1],
    state.veilColor[2],
    opacity,
  ])(state)
)

const showVeil = setVeilOpacity(1)
const hideVeil = setVeilOpacity(0)

const setVeilTransitionTime = (time: number) => (state: GuiState): GuiState => ({
  ...state,
  veilTransitionTime: time,
})

export default reducer<GuiState, GuiAction>(
  initialState,
  isGuiAction
)((state, action) => {
  switch (action.type) {
    case GuiActionKey.FADEIN:
      return composeStateChanges([
        hideVeil,
        setVeilTransitionTime(action.payload),
      ])(state)
    case GuiActionKey.FADEOUT:
      return composeStateChanges([
        showVeil,
        setVeilTransitionTime(action.payload),
      ])(state)
    case GuiActionKey.SET_COLOR:
      return composeStateChanges([
        setVeilColor(action.payload[0]),
        setVeilTransitionTime(action.payload[1]),
      ])(state)
  }
  return checkExhaustive(action)
})

