import { NoOp, NoOpAction } from './core'
import { GuiAction, GuiActionKey, GuiState } from './gui'
import { SystemAction, SystemActionKey, SystemState } from './system'

export * from './core'
export * from './gui'
export * from './system'

export type AppActionKey = NoOp | SystemActionKey | GuiActionKey

export type AppAction = NoOpAction | SystemAction | GuiAction

export interface AppState {
  gui: GuiState
  system: SystemState
}
