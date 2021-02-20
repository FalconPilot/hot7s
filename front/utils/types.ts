import locales from '$front/locale'
import { AppAction, GuiAction, GuiActionKey, SystemAction, SystemActionKey } from '$front/types'

export const isLocaleKey = (key: string): key is keyof typeof locales =>
  Object.keys(locales).includes(key)

const isAction = <ActionType extends AppAction>(keys: string[]) => (
  action: AppAction
): action is ActionType => keys.includes(action.type)

export const isGuiAction = isAction<GuiAction>(Object.values<string>(GuiActionKey))
export const isSystemAction = isAction<SystemAction>(Object.values<string>(SystemActionKey))
