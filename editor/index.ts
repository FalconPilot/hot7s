import path from 'path'
import { app, BrowserWindow } from 'electron'

import { loadFrame } from '$game/utils'

// On app closed hook
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// App ready hook
app.whenReady().then(() => {
  const mainWindow: BrowserWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: true,
    resizable: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  })

  loadFrame(path.resolve(__dirname, '..', 'game'))('editor')(mainWindow)
})
