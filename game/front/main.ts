import { defaultOptions } from '$game/constants'
import IPC from '$game/ipc'
import { AppOptions } from '$game/types'

const setOptions = async (options: AppOptions): Promise<void> =>
  IPC.System.setOptionsHandler.send(() => {
    console.log('Success ! :)')
  })(options)

const resetOptions = async (): Promise<void> =>
  IPC.System.setOptionsHandler.send(() => {
    console.log('Options resetted to default')
  })(defaultOptions)
