import { AppOptions } from '../options'
import { IpcAction } from './core'

export enum IpcSystemMessages {
  GAME_CRASH = 'GAME_CRASH',
  GAME_SAVE = 'GAME_SAVE',
  SAVE_OPTIONS = 'SAVE_OPTIONS',
}

export type CrashGame = IpcAction<IpcSystemMessages.GAME_CRASH, string>
export type SaveGame = IpcAction<IpcSystemMessages.GAME_SAVE>
export type SaveOptions = IpcAction<IpcSystemMessages.SAVE_OPTIONS, AppOptions>

export type IpcSystemAction =
  | CrashGame
  | SaveGame
  | SaveOptions
