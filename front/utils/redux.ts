import { AppAction } from '$front/types'

type ComposerFunction<State> = (state: State) => State

// Compose multiple state-changing functions
export const composeStateChanges = <State>(
  funcs: Array<ComposerFunction<State>>
): ComposerFunction<State> => (state: State): State =>
  funcs.reduce((currentState, func) => func(currentState), state)

export const reducer = <State, ActionType extends AppAction>(
  initialState: State,
  typeguard: (action: AppAction) => action is ActionType
) => (switchFunction: (state: State, action: ActionType) => State) => (
  state: State = initialState,
  action: AppAction = { type: 'NOOP' }
): State => {
  if (typeguard(action)) {
    return switchFunction(state, action)
  }

  return state
}
