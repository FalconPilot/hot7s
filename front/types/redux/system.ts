import { ActionCreator, ActionCreatorWithPayload } from '$front/types'
import { AppOptions, GameState, ValueOf } from '$game/types'

export enum GameView {
  MainMenu = 'MainMenu',
  IllustratedScene = 'IllustratedScene',
}

export type GameViewPayload = GameView.MainMenu | [GameView.IllustratedScene, string]

export enum GameOverlay {
  Options = 'Options',
}

export enum SystemActionKey {
  CHANGE_GAMEVIEW = 'SYSTEM/CHANGE_GAMEVIEW',
  ADD_OVERLAY = 'SYSTEM/ADD_OVERLAY',
  REMOVE_OVERLAY = 'SYSTEM/REMOVE_OVERLAY',
  SAVE_OPTIONS = 'SYSTEM/SAVE_OPTIONS',
  UPDATE_OPTIONS = 'SYSTEM/UPDATE_OPTIONS',
  NEW_GAME = 'SYSTEM/NEW_GAME',
  GAME_QUIT = 'SYSTEM/GAME_QUIT',
}

export type SystemActionCreator<AK extends SystemActionKey> = ActionCreator<AK>
export type SystemActionCreatorWithPayload<
  AK extends SystemActionKey,
  Payload
> = ActionCreatorWithPayload<AK, Payload>

export interface SystemActions {
  changeGameView: SystemActionCreatorWithPayload<SystemActionKey.CHANGE_GAMEVIEW, GameView>
  addOverlay: SystemActionCreatorWithPayload<SystemActionKey.ADD_OVERLAY, GameOverlay>
  removeOverlay: SystemActionCreator<SystemActionKey.REMOVE_OVERLAY>
  saveOptions: SystemActionCreatorWithPayload<SystemActionKey.SAVE_OPTIONS, AppOptions>
  updateOptions: SystemActionCreatorWithPayload<SystemActionKey.UPDATE_OPTIONS, AppOptions>
  newGame: SystemActionCreator<SystemActionKey.NEW_GAME>
  quitGame: SystemActionCreator<SystemActionKey.GAME_QUIT>
}

export type SystemAction = ReturnType<ValueOf<SystemActions>>

export interface SystemState {
  gameView: GameView
  gameOverlays: GameOverlay[]
  gameState: GameState
  options: AppOptions
}
