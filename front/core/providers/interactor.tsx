import * as React from 'react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'

import { guiSelector } from '$front/utils'
import { bottom, left, position, px, right, top, zIndex } from '@figouzes/falcon-css'
import { theme } from '$front/constants'

const Blocker = styled.div`
  ${position('absolute')}
  ${top(px(0))}
  ${left(px(0))}
  ${right(px(0))}
  ${bottom(px(0))}
  ${zIndex(theme.zIndices.interactor)}
`

export const InteractorProvider: React.FunctionComponent = ({ children }) => {
  const { blockInteractions } = useSelector(guiSelector)

  return (
    <>
      {blockInteractions ? <Blocker /> : null}
      {children}
    </>
  )
}
