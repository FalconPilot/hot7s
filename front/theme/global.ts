import { css, SerializedStyles } from '@emotion/react'
import {
  backgroundColor,
  boxSizing,
  cssProperties,
  fontFamily,
  height,
  interpolateProperties,
  interpolateProperty,
  margin,
  px,
  textColor,
  vh,
  vw,
  width,
} from '@figouzes/falcon-css'

export const globalStyles: SerializedStyles = css`
  ${interpolateProperties(['*', '*:before', '*:after'])(cssProperties([boxSizing('border-box')]))}

  ${interpolateProperty('body')(
    cssProperties([
      margin([px(0)]),
      backgroundColor([33, 33, 33]),
      textColor([255, 255, 255]),
      fontFamily('arial'),
    ])
  )}

  ${interpolateProperty('#rootNode')(
    cssProperties([
      width(vw(100)),
      height(vh(100)),
    ])
  )}
`
