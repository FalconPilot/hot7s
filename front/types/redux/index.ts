import { NoOpAction } from './core'
import { SystemAction, SystemState } from './system'

export * from './core'
export * from './system'

export type GameAction =
  | NoOpAction
  | SystemAction

export interface GameState {
  system: SystemState
}
