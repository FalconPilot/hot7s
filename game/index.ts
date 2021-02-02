import { app, BrowserWindow } from 'electron'

import { loadConf, loadFrame, writeConf } from '$game/utils'
import { AppOptions } from '$game/types'

// On app closed hook
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// App ready hook
app.whenReady().then(() => {
  const options: AppOptions = loadConf(app)
  writeConf(app)(options)

  const mainWindow: BrowserWindow = new BrowserWindow({
    width: options.resolution.windowWidth,
    height: options.resolution.windowHeight,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
    },
  })

  loadFrame(__dirname)('main')(mainWindow)
})