import { App, ipcMain } from 'electron'

import { GameWindows, IpcActions } from '$game/types'

export const handleMessage = <Message extends IpcActions>(msg: Message[0]) => (
  handler: (app: App, windows: GameWindows) => (v: Message[1]) => Message[2]
) => (app: App, windows: GameWindows): void => {
  ipcMain.on(msg, (event, arg) => {
    const payload: Message[1] = (arg as unknown) as Message[1]

    try {
      const res: Message[2] = handler(app, windows)(payload)
      event.reply(msg, ['OK', res])
    } catch (err) {
      const errorMessage: string = typeof err?.message === 'string' ? err.message : 'Unexpected error'
      event.reply(msg, ['CRASH', errorMessage])
    }
  })
}

export const handleBlankMessage = <Message extends IpcActions>(msg: Message[0]) => (
  handler: (app: App, windows: GameWindows) => (v: Message[1]) => Message[2]
) => (app: App, windows: GameWindows ): void => {
  ipcMain.on(msg, (event, arg) => {
    const payload: Message[1] = (arg as unknown) as Message[1]
    handler(app, windows)(payload)
  })
}
