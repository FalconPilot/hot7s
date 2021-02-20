import * as React from 'react'
import { useSelector } from 'react-redux'

import { systemSelector } from '$front/utils'
import { checkExhaustive } from '$game/utils'
import { GameView } from '$front/types'
import { MainMenu } from '$front/components'


import { systemImage } from '$front/utils'

import { SplashScreen } from './splashscreen'
import { splashScreenFadeDelay } from './styled'

const splashScreenImages = [
  systemImage('falconpilot.svg'),
] as const

export const Main: React.FunctionComponent = () => {
  const [[splashIndex, isFadeout], setSplash] = React.useState<[number, boolean]>([0, false])
  const { gameView } = useSelector(systemSelector)

  // All splashscreens have been displayed
  // Display correct GameView
  if (splashIndex >= splashScreenImages.length) {
    switch (gameView) {

      // Main menu
      case GameView.MainMenu:
        return <MainMenu />
      
      // Illustrated scene
      case GameView.IllustratedScene:
        return null
    }
    checkExhaustive(gameView)
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
