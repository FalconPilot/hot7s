import { App, ipcMain } from 'electron'

import { GameWindows, IpcActions } from '$game/types'

export const handleMessage = <Message extends IpcActions>(msg: Message[0]) => (
  handler: (windows: GameWindows) => (v: Message[1]) => Message[2]
) => (windows: GameWindows): void => {
  ipcMain.on(msg, (event, arg) => {
    const payload: Message[1] = (arg as unknown) as Message[1]

    try {
      const res: Message[2] = handler(windows)(payload)
      event.reply(['OK', res])
    } catch (err) {
      const msg: string = typeof err?.message === 'string' ? err.message : 'Unexpected error'
      event.reply(['CRASH', msg])
    }
  })
}
