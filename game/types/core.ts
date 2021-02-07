import { BrowserWindow } from 'electron'

export type ValueOf<T> = T[keyof T]

export interface GameWindows {
  main: BrowserWindow | null
  debug: BrowserWindow | null
}
