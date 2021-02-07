import { ActionCreator, ActionCreatorWithPayload } from '$front/types'
import { AppOptions, ValueOf } from '$game/types'

export enum GameView {
  MainMenu = 'MainMenu',
}

export enum GameOverlay {
  Options = 'Options',
}

export enum SystemActionKey {
  CHANGE_GAMEVIEW = 'CHANGE_GAMEVIEW',
  ADD_OVERLAY = 'ADD_OVERLAY',
  REMOVE_OVERLAY = 'REMOVE_OVERLAY',
  SET_OPTIONS = 'SET_OPTIONS',
}

export type SystemActionCreator<AK extends SystemActionKey> = ActionCreator<AK>
export type SystemActionCreatorWithPayload<AK extends SystemActionKey, Payload> = ActionCreatorWithPayload<
  AK,
  Payload
>

export interface SystemActions {
  changeGameView: SystemActionCreatorWithPayload<SystemActionKey.CHANGE_GAMEVIEW, GameView>
  addOverlay: SystemActionCreatorWithPayload<SystemActionKey.ADD_OVERLAY, GameOverlay>
  removeOverlay: SystemActionCreator<SystemActionKey.REMOVE_OVERLAY>
  setOptions: SystemActionCreatorWithPayload<SystemActionKey.SET_OPTIONS, AppOptions>
}

export type SystemAction = ReturnType<ValueOf<SystemActions>>

export interface SystemState {
  gameView: GameView
  gameOverlays: GameOverlay[]
  options: AppOptions
}
