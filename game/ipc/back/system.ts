import { CrashGame, IpcResponseHandler, IpcSystemMessages } from '$game/types'
import { handleMessage } from '$game/utils'

const crashGame = handleMessage<CrashGame>(IpcSystemMessages.GAME_CRASH)((reason: string) => {
  console.error(reason)
  process.crash()
  return null
})

const systemResponseHandlers: IpcResponseHandler[] = [
  crashGame,
]

export default systemResponseHandlers
