import * as React from 'react'
import { Dispatch } from 'redux'

import { GameAction } from '$front/types'

import { OverlayWrapper } from './styled'
import { useDispatch } from 'react-redux'
import { actions } from '$front/actions'
import { gameResolutions } from '$front/constants'
import { text } from '$front/utils'

export const OptionsOverlay: React.FunctionComponent = () => {
  const dispatch: Dispatch<GameAction> = useDispatch()

  const closeOptions = React.useCallback((): void => {
    dispatch(actions.system.removeOverlay())
  }, [dispatch])

  return (
    <OverlayWrapper>
      <button onClick={closeOptions}>Retour</button>
      {text('en').system.options}
      <div>
        {text('en').system.resolution}
        <select>
          {gameResolutions.map(resolution => {
            const resText: string = `${resolution.windowWidth}x${resolution.windowHeight}`
            return <option key={resText}>{resText}</option>
          })}
        </select>
      </div>
      <button>{text('en').system.confirm}</button>
    </OverlayWrapper>
  )
}
