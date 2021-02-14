import { noOp, sendMessage } from '$front/utils'
import { AppOptions, CrashGame, IpcSystemMessages, SaveOptions } from '$game/types'

export const saveOptions = (options: AppOptions): Promise<void> =>
  sendMessage<SaveOptions>(IpcSystemMessages.SAVE_OPTIONS)(options)(noOp)

export const crashGame = (reason: string): Promise<void> => {
  const msg: string = `FATAL ERROR : ${reason}`
  alert(msg)
  return sendMessage<CrashGame>(IpcSystemMessages.GAME_CRASH)(msg)(noOp)
  console.error('If you see this message, then the game failed to crash. What a shame.')
}
