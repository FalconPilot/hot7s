import { Dispatch } from 'redux'

import { AppAction } from '$front/types'

export const fadeOut = (
  dispatch: Dispatch<AppAction>
) => (
  duration: number
): Promise<void> => (
  new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve()
    }, duration)
  })
)
