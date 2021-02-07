import { app, BrowserWindow } from 'electron'

import { handleResponses } from '$game/ipc'
import { loadConf, loadFrame, writeConf } from '$game/utils'
import { GameGlobals } from '$game/types'

declare const global: GameGlobals

export const init = (): void => {
  // On app closed hook
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  // App ready hook
  app.whenReady().then(() => {
    const options = loadConf(app)
    global.options = options
    writeConf(app)(options)

    const mainWindow: BrowserWindow = new BrowserWindow({
      width: options.resolution.windowWidth,
      height: options.resolution.windowHeight,
      frame: true,
      resizable: false,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: true,
      },
    })

    // Listen to all handlers
    handleResponses(app, {
      main: mainWindow,
      debug: null,
    })

    // Load mainframe
    loadFrame(__dirname)('main')(mainWindow)
  })
}
