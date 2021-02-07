import { SystemActionKey, SystemActions } from '$front/types'
import { actionCreator, actionWithPayloadCreator } from '$front/utils'

const systemActionCreator = <K extends SystemActionKey>(type: K) => actionCreator<K>(type)

const systemActionWithPayloadCreator = <K extends SystemActionKey>(type: K) => actionWithPayloadCreator<K>(type)

export const systemActions: SystemActions = {
  changeGameView: systemActionWithPayloadCreator(SystemActionKey.CHANGE_GAMEVIEW),
  addOverlay: systemActionWithPayloadCreator(SystemActionKey.ADD_OVERLAY),
  removeOverlay: systemActionCreator(SystemActionKey.REMOVE_OVERLAY),
}
