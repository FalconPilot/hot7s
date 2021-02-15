import styled from '@emotion/styled'
import {
  backgroundColor,
  bottom,
  em,
  fontSize,
  height,
  left,
  position,
  px,
  right,
} from '@figouzes/falcon-css'

export const DialogWindow = styled.div`
  ${position('absolute')}
  ${fontSize(px(12))}
  ${height(em(4))}
  ${left(px(0))}
  ${right(px(0))}
  ${bottom(px(0))}
  ${backgroundColor([0, 0, 0, 0.4])}
`
