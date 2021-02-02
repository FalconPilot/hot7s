import * as handlers from '../handlers'
import { defaultOptions } from '$game/constants'
import { AppOptions } from '$game/types'

export const crashGame = async (reason: string): Promise<void> => {
  window.alert(reason)
  return handlers.system.crashGame.send(() => {
    console.log('If you see this log, then the game failed to crash while it was supposed to.')
  })(reason)
}

export const setOptions = async (options: AppOptions): Promise<void> =>
  handlers.system.setOptions.send(() => {
    console.log('Success ! :)')
  })(options)

export const resetOptions = async (): Promise<void> =>
  handlers.system.setOptions.send(() => {
    console.log('Options resetted to default')
  })(defaultOptions)
