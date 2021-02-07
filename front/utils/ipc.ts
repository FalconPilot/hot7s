import { IpcActions, IpcError, IpcResponse } from '$game/types'
import { isIpcCrash, isIpcSuccess, isIpcWarning } from '$game/utils/types'

const { ipcRenderer } = require('electron')

export const sendMessage = <Message extends IpcActions>(msg: Message[0]) => (
  payload: Message[1]
) => (responseHandler: (v: Message[2]) => void): Promise<void> =>
  new Promise((resolve, reject) => {
    ipcRenderer.on(msg, (event: unknown) => {
      // Mandatory cast :(
      const response: IpcResponse<Message[2]> = (event as unknown) as IpcResponse<Message[2]>

      if (isIpcSuccess<Message[2]>(response)) {
        return resolve(responseHandler(response[1]))
      }

      if (isIpcWarning<Message[2]>(response)) {
        console.warn(response[2])
        return resolve(responseHandler(response[1]))
      }

      if (isIpcCrash(response)) {
        return reject(new Error(response[1].message))
      }

      throw new IpcError<Message[2]>('IPC response was neither OK, WARNING or CRASH', response)
    })

    ipcRenderer.send(msg, payload)
  })
