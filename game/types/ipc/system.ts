import { AppOptions } from '../options'
import { IpcAction } from './core'

export enum IpcSystemMessages {
  GAME_CRASH = 'GAME_CRASH',
  GAME_QUIT = 'GAME_QUIT',
  GAME_SAVE = 'GAME_SAVE',
  SAVE_OPTIONS = 'SAVE_OPTIONS',
}

export type CrashGame = IpcAction<IpcSystemMessages.GAME_CRASH, string>
export type QuitGame = IpcAction<IpcSystemMessages.GAME_QUIT>
export type SaveGame = IpcAction<IpcSystemMessages.GAME_SAVE>
export type SaveOptions = IpcAction<IpcSystemMessages.SAVE_OPTIONS, AppOptions>

export type IpcSystemAction =
  | CrashGame
  | QuitGame
  | SaveGame
  | SaveOptions
