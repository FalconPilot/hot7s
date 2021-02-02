import { ipcMain, ipcRenderer } from 'electron'

import { IpcActions, IpcError, IpcMessages, IpcResponse } from '$game/types'
import { isIpcCrash, isIpcSuccess, isIpcWarning } from './types'

const sendMessage = <Message extends IpcActions>(handler: (v: Message[2]) => void) => (
  msg: Message[0]
) => async (payload: Message[1]): Promise<void> =>
  new Promise(async (resolve, reject) => {
    await ipcRenderer.on(msg, (event) => {
      // Mandatory cast :(
      const response: IpcResponse<Message[2]> = (event as unknown) as IpcResponse<Message[2]>

      if (isIpcSuccess<Message[2]>(response)) {
        return resolve(handler(response[1]))
      }

      if (isIpcWarning<Message[2]>(response)) {
        console.warn(response[2])
        return resolve(handler(response[1]))
      }

      if (isIpcCrash(response)) {
        return reject(new Error(response[1].message))
      }

      throw new IpcError<Message[2]>('IPC response was neither OK, WARNING or CRASH', response)
    })
    await ipcRenderer.send(msg, payload)
  })

const handleMessage = <Message extends IpcActions>(handler: (v: Message[1]) => Message[2]) => (
  msg: Message[0]
) => (): void => {
  ipcMain.on(msg, (event, arg) => {
    const payload: Message[1] = (arg as unknown) as Message[1]

    try {
      const res: Message[2] = handler(payload)
      event.reply(['OK', res])
    } catch (err) {
      const msg: string = typeof err?.message === 'string' ? err.message : 'Unexpected error'
      event.reply(['CRASH', msg])
    }
  })
}

export const messageHandler = <Message extends IpcActions>(msg: Message[0]) => ({
  send: (responseHandler: (v: Message[2]) => void) => sendMessage<Message>(responseHandler)(msg),
  reply: (payloadHandler: (v: Message[1]) => Message[2]) =>
    handleMessage<Message>(payloadHandler)(msg),
})

export const genericIpcPayloadHandler = <Message extends IpcActions>(
  handler: (v: Message[1]) => void
) => (v: Message[1]): null => {
  handler(v)
  return null
}
