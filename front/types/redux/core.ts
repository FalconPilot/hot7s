export interface ReduxAction<ActionType extends string> {
  type: ActionType
}

export interface ReduxActionWithPayload<ActionType extends string, ActionPayload>
  extends ReduxAction<ActionType> {
  payload: ActionPayload
}

export type ActionCreator<ActionKey extends string> = () => ReduxAction<ActionKey>
export type ActionCreatorWithPayload<ActionKey extends string, Payload> = (
  payload: Payload
) => ReduxActionWithPayload<ActionKey, Payload>

export type NoOp = 'NOOP'

export type NoOpAction = ReduxAction<'NOOP'>
