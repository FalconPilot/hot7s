import * as React from 'react'
import { Dispatch } from 'redux'
import { useDispatch, useSelector } from 'react-redux'

import { asyncDispatch, fadeOut, systemSelector, text } from '$front/utils'
import { actions } from '$front/actions'
import { AppAction, GameOverlay } from '$front/types'

interface MenuChoiceProps {
  onClick?: () => void
}

const MenuChoice: React.FunctionComponent<MenuChoiceProps> = ({ children, onClick }) => (
  <li>
    <button onClick={onClick}>{children}</button>
  </li>
)

export const MenuChoices: React.FunctionComponent = () => {
  const dispatch: Dispatch<AppAction> = useDispatch()
  const { options } = useSelector(systemSelector)

  const newGame = React.useCallback((): void => {
    dispatch(actions.gui.blockInteractions())
    fadeOut(dispatch)(1500)
      .then(asyncDispatch(dispatch)(actions.system.newGame()))
  }, [dispatch])

  const openOptions = React.useCallback((): void => {
    dispatch(actions.system.addOverlay(GameOverlay.Options))
  }, [dispatch])

  const quit = React.useCallback((): void => {
    dispatch(actions.system.quitGame())
  }, [dispatch])

  return (
    <ul>
      <MenuChoice onClick={newGame}>{text(options.game.language).system.newGame}</MenuChoice>
      <MenuChoice>{text(options.game.language).system.load}</MenuChoice>
      <MenuChoice onClick={openOptions}>{text(options.game.language).system.options}</MenuChoice>
      <MenuChoice onClick={quit}>{text(options.game.language).system.quitGame}</MenuChoice>
    </ul>
  )
}
