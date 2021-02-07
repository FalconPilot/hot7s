import * as React from 'react'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'

import { text } from '$front/utils'
import { actions } from '$front/actions'
import { GameAction, GameOverlay } from '$front/types'

interface MenuChoiceProps {
  onClick?: () => void
}

const MenuChoice: React.FunctionComponent<MenuChoiceProps> = ({ children, onClick }) => (
  <li>
    <button onClick={onClick}>{children}</button>
  </li>
)

export const MenuChoices: React.FunctionComponent = () => {
  const dispatch: Dispatch<GameAction> = useDispatch()

  const openOptions = React.useCallback((): void => {
    dispatch(actions.system.addOverlay(GameOverlay.Options))
  }, [dispatch])

  return (
    <ul>
      <MenuChoice>{text('en').system.newGame}</MenuChoice>
      <MenuChoice>{text('en').system.load}</MenuChoice>
      <MenuChoice onClick={openOptions}>{text('en').system.options}</MenuChoice>
      <MenuChoice>{text('en').system.quitGame}</MenuChoice>
    </ul>
  )
}