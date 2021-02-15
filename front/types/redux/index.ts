import { NoOp, NoOpAction } from './core'
import { SystemAction, SystemActionKey, SystemState } from './system'

export * from './core'
export * from './system'

export type GameActionKey = NoOp | SystemActionKey

export type GameAction = NoOpAction | SystemAction

export interface GameState {
  system: SystemState
}
