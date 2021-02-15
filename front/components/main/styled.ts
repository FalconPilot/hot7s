import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import {
  backgroundColor,
  flexbox,
  height,
  maxHeight,
  maxWidth,
  percent,
  width,
} from '@figouzes/falcon-css'

export const splashScreenFadeDelay = 400

const fadeIn = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`

export const SplashScreenWrapper = styled.div<{ isFadeout: boolean }>`
  ${width(percent(100))}
  ${height(percent(100))}
  ${flexbox(['column', 'center', 'center'])}
  ${backgroundColor([33, 33, 33])}
  transition: ${splashScreenFadeDelay}ms;
  opacity: ${(props) => (props.isFadeout ? 0 : 1)};
  animation: ${fadeIn} ${splashScreenFadeDelay}ms linear 1;
`

export const SplashScreenImage = styled.img`
  ${maxWidth(percent(80))}
  ${maxHeight(percent(80))}
`
