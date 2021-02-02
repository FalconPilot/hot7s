import { AppOptions } from '../options'
import { IpcAction } from './core'

export enum IpcSystemMessages {
  GAME_CRASH = 'GAME_CRASH',
  GAME_SAVE = 'GAME_SAVE',
  SET_OPTIONS = 'SET_OPTIONS',
}

export type CrashGame = IpcAction<IpcSystemMessages.GAME_CRASH, string>
export type SaveGame = IpcAction<IpcSystemMessages.GAME_SAVE>
export type SetOptions = IpcAction<IpcSystemMessages.SET_OPTIONS, AppOptions>

export type IpcSystemAction =
  | CrashGame
  | SaveGame
  | SetOptions
