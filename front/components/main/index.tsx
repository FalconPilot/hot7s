import * as React from 'react'
import { useSelector } from 'react-redux'

import { systemSelector } from '$front/utils'
import { checkExhaustive } from '$game/utils'
import { GameView } from '$front/types'
import { MainMenu } from '$front/components'

export const Main: React.FunctionComponent = () => {
  const { gameView } = useSelector(systemSelector)

  // Display correct GameView
  switch (gameView) {

    // Main menu
    case GameView.MainMenu:
      return <MainMenu />
  }
  checkExhaustive(gameView)
}
