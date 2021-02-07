import path from 'path'
import { BrowserWindow } from 'electron'

export const loadFrame = (baseDirPath: string) => (frameName: string) => (
  window: BrowserWindow
): void => {
  const frame: string = `${frameName}.html`
  console.log(`[HOT7S] Loading frame "${frame}"...`)
  window.loadFile(path.resolve(baseDirPath, 'static', 'frames', frame))
}
