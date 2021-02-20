import { AppAction } from '$front/types'
import { Dispatch } from 'redux'

export const delayResolve = (f: (duration: number) => void) => (duration: number): Promise<void> =>
  new Promise((resolve) => {
    const effectiveDuration: number = duration >= 0 ? duration : 0
    f(effectiveDuration)
    window.setTimeout(() => {
      resolve()
    }, effectiveDuration)
  })

export const asyncDispatch = (dispatch: Dispatch<AppAction>) => (
  action: AppAction
) => (): Promise<void> =>
  new Promise((resolve) => {
    dispatch(action)
    resolve()
  })
