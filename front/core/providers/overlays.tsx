import * as React from 'react'
import { useSelector } from 'react-redux'

import { systemSelector } from '$front/utils'
import { GameOverlay } from '$front/types'
import { checkExhaustive } from '$game/utils'
import { OptionsOverlay } from '$front/components'

export const OverlayProvider: React.FunctionComponent = ({ children }) => {
  const { gameOverlays } = useSelector(systemSelector)

  if (gameOverlays.length === 0) {
    return <>{children}</>
  }

  const currentOverlay: GameOverlay = gameOverlays[gameOverlays.length - 1]

  switch (currentOverlay) {

    // Options
    case GameOverlay.Options:
      return (
        <>
          <OptionsOverlay />
          {children}
        </>
      )
  }
  checkExhaustive(currentOverlay)
}
