import { Dispatch } from 'redux'

import { AppAction } from '$front/types'
import { actions } from '$front/actions'
import { delayResolve } from './promises'

export const fadeIn = (dispatch: Dispatch<AppAction>) =>
  delayResolve((duration: number): void => {
    dispatch(actions.gui.fadeIn(duration))
  })
