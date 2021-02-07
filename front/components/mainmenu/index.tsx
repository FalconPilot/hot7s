import * as React from 'react'

import { text } from '$front/utils'

import { MenuChoices } from './menuchoices'

export const MainMenu: React.FunctionComponent = () => (
  <div>
    {text('en').system.gameTitle}
    <MenuChoices />
  </div>
)
