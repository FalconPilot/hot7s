import { theme } from '$front/constants'
import styled from '@emotion/styled'
import {
  backgroundColor,
  bottom,
  left,
  position,
  px,
  right,
  top,
  zIndex,
} from '@figouzes/falcon-css'

export const OverlayWrapper = styled.div`
  ${position('absolute')}
  ${top(px(0))}
  ${left(px(0))}
  ${right(px(0))}
  ${bottom(px(0))}
  ${zIndex(theme.zIndices.overlay)}
  ${backgroundColor([10, 10, 10])}
`
