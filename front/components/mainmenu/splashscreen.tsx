import * as React from 'react'

import { SplashScreenImage, SplashScreenWrapper } from './styled'

export interface SplashScreenProps {
  image: string
  isFadeout: boolean
}

export const SplashScreen: React.FunctionComponent<SplashScreenProps> = ({ image, isFadeout }) => (
  <SplashScreenWrapper isFadeout={isFadeout}>
    <SplashScreenImage src={image} />
  </SplashScreenWrapper>
)
