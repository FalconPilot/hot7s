import * as React from 'react'
import { useSelector } from 'react-redux'

import { systemSelector, text } from '$front/utils'

import { MenuChoices } from './menuchoices'

export const MainMenu: React.FunctionComponent = () => {
  const { options } = useSelector(systemSelector)
  return (
    <div>
      {text(options.game.language).system.gameTitle}
      <MenuChoices />
    </div>
  )
}
