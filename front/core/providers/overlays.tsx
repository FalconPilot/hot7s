import * as React from 'react'
import { useSelector } from 'react-redux'

import { systemSelector } from '$front/utils'
import { GameOverlay } from '$front/types'
import { OptionsOverlay } from '$front/components'

export const OverlayProvider: React.FunctionComponent = ({ children }) => {
  const { gameOverlays } = useSelector(systemSelector)

  const Overlay: React.FunctionComponent | null = gameOverlays.length === 0 ? null : {
    [GameOverlay.Options]: OptionsOverlay
  }[gameOverlays[gameOverlays.length - 1]]

  return (
    <>
      {children}
      {Overlay ? <Overlay /> : null}
    </>
  )
}
