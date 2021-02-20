import { GuiActionKey, GuiActions } from '$front/types'
import { actionCreator, actionWithPayloadCreator } from '$front/utils'

const guiActionCreator = <K extends GuiActionKey>(type: K) => actionCreator<K>(type)

const guiActionWithPayloadCreator = <K extends GuiActionKey>(type: K) =>
  actionWithPayloadCreator<K>(type)

export const guiActions: GuiActions = {
  fadeOut: guiActionWithPayloadCreator(GuiActionKey.FADEOUT),
  fadeIn: guiActionWithPayloadCreator(GuiActionKey.FADEIN),
  blockInteractions: guiActionCreator(GuiActionKey.BLOCK_INTERACTIONS),
  unblockInteractions: guiActionCreator(GuiActionKey.UNBLOCK_INTERACTIONS),
  setColor: guiActionWithPayloadCreator(GuiActionKey.SET_COLOR),
}
