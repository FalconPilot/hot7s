import * as handlers from '../handlers'
import { IpcResponseHandler } from '$game/types'

const systemResponseHandlers: IpcResponseHandler[] = [
  handlers.system.crashGame.reply((reason: string) => {
    console.error(reason)
    process.crash()
    return null
  })
]

export default systemResponseHandlers
