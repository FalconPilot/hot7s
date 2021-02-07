import { CrashGame, IpcResponseHandler, IpcSystemMessages, QuitGame, SaveOptions } from '$game/types'
import { handleBlankMessage, handleMessage, writeConf } from '$game/utils'

const crashGame = handleBlankMessage<CrashGame>(IpcSystemMessages.GAME_CRASH)(() => reason => {
  console.error(reason)
  process.crash()
  return null
})

const saveOptions = handleMessage<SaveOptions>(IpcSystemMessages.SAVE_OPTIONS)((app, windows) => options => {
  if (windows.main) {
    windows.main.setSize(options.resolution.windowWidth, options.resolution.windowHeight)
  }
  writeConf(app)(options)
  return null
})

const quitGame = handleBlankMessage<QuitGame>(IpcSystemMessages.GAME_QUIT)((app, windows) => () => {
  app.quit()
  return null
})

const systemResponseHandlers: IpcResponseHandler[] = [
  crashGame,
  quitGame,
  saveOptions,
]

export default systemResponseHandlers
