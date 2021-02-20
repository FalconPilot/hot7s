import * as React from 'react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'

import { guiSelector, systemSelector } from '$front/utils'
import { GameOverlay } from '$front/types'
import { OptionsOverlay } from '$front/components'
import { theme } from '$front/constants'
import { backgroundColor, bottom, left, position, px, RGBA, right, top, zIndex } from '@figouzes/falcon-css'

const veilCreator = (
  color: RGBA,
  transitionTime: number,
) => styled.div`
  ${position('absolute')}
  ${top(px(0))}
  ${left(px(0))}
  ${right(px(0))}
  ${bottom(px(0))}
  ${backgroundColor(color)}
  ${zIndex(theme.zIndices.veil)}
  pointer-events: none;
  transition: ${transitionTime}ms;
`

export const OverlayProvider: React.FunctionComponent = ({ children }) => {
  const { gameOverlays } = useSelector(systemSelector)
  const {
    veilColor,
    veilTransitionTime,
  } = useSelector(guiSelector)

  const Veil = veilCreator(veilColor, veilTransitionTime)

  const Overlay: React.FunctionComponent | null = gameOverlays.length === 0 ? null : {
    [GameOverlay.Options]: OptionsOverlay
  }[gameOverlays[gameOverlays.length - 1]]

  return (
    <>
      {Overlay ? <Overlay /> : null}
      <Veil />
      {children}
    </>
  )
}
