import * as React from 'react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'

import { guiSelector } from '$front/utils'
import { theme } from '$front/constants'
import { bottom, left, position, px, rgba, RGBA, right, top, zIndex } from '@figouzes/falcon-css'

const Veil = styled.div`
  ${position('absolute')}
  ${top(px(0))}
  ${left(px(0))}
  ${right(px(0))}
  ${bottom(px(0))}
  ${zIndex(theme.zIndices.veil)}
  pointer-events: none;
`

const veilStyle = (color: RGBA, transitionTime: number): React.CSSProperties => ({
  backgroundColor: rgba(color),
  transition: `${transitionTime}ms`,
})

export const VeilProvider: React.FunctionComponent = ({ children }) => {
  const {
    veilColor,
    veilTransitionTime,
  } = useSelector(guiSelector)

  const styles: React.CSSProperties = veilStyle(veilColor, veilTransitionTime)

  return (
    <>
      <Veil style={styles} />
      {children}
    </>
  )
}
