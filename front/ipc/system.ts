import { sendMessage } from '$front/utils'
import { CrashGame, IpcSystemMessages } from '$game/types'

export const crashGame = (reason: string) => {
  alert(reason)
  sendMessage<CrashGame>(IpcSystemMessages.GAME_CRASH)(reason)(() => {})
  console.error('If you see this message, then the game failed to crash. What a shame.')
}

