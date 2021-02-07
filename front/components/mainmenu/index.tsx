import * as React from 'react'

import { systemImage, text } from '$front/utils'

import { SplashScreen } from './splashscreen'
import { splashScreenFadeDelay } from './styled'
import { MenuChoices } from './menuchoices'

const splashScreenImages = [
  systemImage('falconpilot.svg'),
] as const

export const MainMenu: React.FunctionComponent = () => {
  const [[splashIndex, isFadeout], setSplash] = React.useState<[number, boolean]>([0, false])

  // All splashscreens have been displayed
  if (splashIndex >= splashScreenImages.length) {
    return (
      <div>
        {text('en').system.gameTitle}
        <MenuChoices />
      </div>
    )
  }

  if (!isFadeout) {
    window.setTimeout(() => {
      setSplash([splashIndex, true])
      window.setTimeout(() => {
        setSplash([splashIndex + 1, false])
      }, splashScreenFadeDelay + 100)
    }, 2000)
  }

  return (
    <SplashScreen image={splashScreenImages[splashIndex]} isFadeout={isFadeout} />
  )
}
