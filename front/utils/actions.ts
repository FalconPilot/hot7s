import { GameActionKey } from '$front/types'

export const actionCreator = <K extends GameActionKey>(type: K) => () => ({ type })

export const actionWithPayloadCreator = <K extends GameActionKey>(type: K) => <Payload>(payload: Payload) => ({
  type,
  payload,
})
