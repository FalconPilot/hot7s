import { ipcMain } from 'electron'

import { IpcActions } from '$game/types'

export const handleMessage = <Message extends IpcActions>(msg: Message[0]) => (
  handler: (v: Message[1]) => Message[2]
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
