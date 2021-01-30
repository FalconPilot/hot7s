import electron, { App, BrowserWindow } from 'electron'

import { loadConf, writeConf } from '$utils'
import { AppOptions } from '$types'

const app: App = electron.app

let mainWindow: BrowserWindow | null = null

const options: AppOptions = loadConf()
writeConf(options)

console.log(options)

// app.on('ready', () => {
//   mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600
//   })
// })
