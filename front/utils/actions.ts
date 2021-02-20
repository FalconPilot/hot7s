import { AppActionKey } from '$front/types'

export const actionCreator = <K extends AppActionKey>(type: K) => () => ({ type })

export const actionWithPayloadCreator = <K extends AppActionKey>(type: K) => <Payload>(
  payload: Payload
) => ({
  type,
  payload,
})
