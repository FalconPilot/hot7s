import { CrashGame, IpcResponseHandler, IpcSystemMessages, SaveOptions } from '$game/types'
import { handleMessage, writeConf } from '$game/utils'

const crashGame = handleMessage<CrashGame>(IpcSystemMessages.GAME_CRASH)(() => reason => {
  console.error(reason)
  process.crash()
  return null
})

const setOptions = handleMessage<SaveOptions>(IpcSystemMessages.SAVE_OPTIONS)(windows => options => {
  if (windows.main) {
    windows.main.setSize(options.resolution.windowWidth, options.resolution.windowHeight)
  }
  writeConf(options)
  return null
})

const systemResponseHandlers: IpcResponseHandler[] = [
  crashGame,
  setOptions,
]

export default systemResponseHandlers
