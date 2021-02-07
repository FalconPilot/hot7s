import { app, BrowserWindow } from 'electron'

import { handleResponses } from '$game/ipc'
import { loadConf, loadFrame, writeConf } from '$game/utils'

export const init = (): void => {
  // On app closed hook
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  // App ready hook
  app.whenReady().then(() => {
    const options = loadConf()

    writeConf(options)

    const mainWindow: BrowserWindow = new BrowserWindow({
      width: options.resolution.windowWidth,
      height: options.resolution.windowHeight,
      frame: false,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },
    })

    // Listen to all handlers
    handleResponses({
      main: mainWindow,
      debug: null,
    })

    // Load mainframe
    loadFrame(__dirname)('main')(mainWindow)
  })
}
