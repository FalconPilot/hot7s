import { noOp, sendMessage } from '$front/utils'
import { CrashGame, IpcSystemMessages } from '$game/types'

export const crashGame = (reason: string) => {
  const msg: string = `FATAL ERROR : ${reason}`
  alert(msg)
  sendMessage<CrashGame>(IpcSystemMessages.GAME_CRASH)(msg)(noOp)
  console.error('If you see this message, then the game failed to crash. What a shame.')
}
