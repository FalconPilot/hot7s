import locales from '$front/locale'
import { GameAction, SystemAction, SystemActionKey } from '$front/types'

export const isLocaleKey = (key: string): key is keyof typeof locales =>
  Object.keys(locales).includes(key)

const isAction = <ActionType extends GameAction>(keys: string[]) => (
  action: GameAction
): action is ActionType => keys.includes(action.type)

export const isSystemAction = isAction<SystemAction>(Object.values<string>(SystemActionKey))
