import { app, BrowserWindow } from 'electron'

import { loadConf, writeConf } from '$game/utils'
import { AppOptions } from '$game/types'

let mainWindow: BrowserWindow | null = null

// App ready hook
app.whenReady().then(() => {
  const options: AppOptions = loadConf(app)
  writeConf(app)(options)

  mainWindow = new BrowserWindow({
    width: options.resolution.windowWidth,
    height: options.resolution.windowHeight,
  })
})
