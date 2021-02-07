import { App } from 'electron'

import { IpcSystemAction, IpcSystemMessages } from './system'
import { GameWindows } from '../core'

export interface IpcErrorPayload {
  message: string
}

export enum IpcErrorTypes {
  WARNING = 'WARNING',
  CRASH = 'CRASH',
}

export type IpcMessages = IpcSystemMessages

export type IpcSuccessResponse<Success> = ['OK', Success]
export type IpcWarningResponse<Success> = ['WARNING', Success, IpcErrorPayload]
export type IpcCrashResponse = ['CRASH', IpcErrorPayload]

export type IpcResponse<Success> =
  | IpcSuccessResponse<Success>
  | IpcWarningResponse<Success>
  | IpcCrashResponse

export type IpcAction<Message extends IpcMessages, Payload = null, Response = null> = [
  Message,
  Payload,
  Response
]

export type IpcActions = IpcSystemAction

export type IpcResponseHandler = (app: App, windows: GameWindows) => void

// IPC Error class
export class IpcError<ExpectedSuccess> extends Error {
  public ipcResponse: IpcResponse<ExpectedSuccess>

  constructor(message: string, response: IpcResponse<ExpectedSuccess>) {
    super(message)
    this.ipcResponse = response
  }
}
