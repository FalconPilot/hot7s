import { ActionCreator, ActionCreatorWithPayload } from '$front/types'
import { ValueOf } from '$game/types'

export enum GameView {
  MainMenu = 'MainMenu',
}

export enum SystemActionKey {
  CHANGE_GAMEVIEW = 'CHANGE_GAMEVIEW',
}

export type SystemActionCreator<AK extends SystemActionKey> = ActionCreator<AK>
export type SystemActionCreatorWithPayload<AK extends SystemActionKey, Payload> = ActionCreatorWithPayload<
  AK,
  Payload
>

export interface SystemActions {
  changeGameView: SystemActionCreatorWithPayload<SystemActionKey.CHANGE_GAMEVIEW, GameView>
}

export type SystemAction = ReturnType<ValueOf<SystemActions>>

export interface SystemState {
  gameView: GameView
}
