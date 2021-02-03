import { IpcRenderer } from 'electron'

export interface GameWindow extends Window {
  ipcRenderer: IpcRenderer
}
