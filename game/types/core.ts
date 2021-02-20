import { BrowserWindow } from 'electron'

import { AppOptions } from './options'

export type ValueOf<T> = T[keyof T]

export interface GameGlobals {
  options: AppOptions
}

export enum GameContentType {
  Dialog = 'dialogs',
}

export interface GameWindows {
  main: BrowserWindow | null
  debug: BrowserWindow | null
}
