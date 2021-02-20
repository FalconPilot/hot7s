import { RGBA } from '@figouzes/falcon-css'

import { ActionCreator, ActionCreatorWithPayload } from '$front/types'
import { ValueOf } from '$game/types'

export enum GuiActionKey {
  FADEOUT = 'GUI/FADEOUT',
  FADEIN = 'GUI/FADEIN',
  SET_COLOR = 'GUI/SET_COLOR',
}

export type GuiActionCreator<AK extends GuiActionKey> = ActionCreator<AK>
export type GuiActionCreatorWithPayload<
  AK extends GuiActionKey,
  Payload
> = ActionCreatorWithPayload<AK, Payload>

export interface GuiActions {
  fadeOut: GuiActionCreatorWithPayload<GuiActionKey.FADEOUT, number>
  fadeIn: GuiActionCreatorWithPayload<GuiActionKey.FADEIN, number>
  setColor: GuiActionCreatorWithPayload<GuiActionKey.SET_COLOR, [RGBA, number]>
}

export type GuiAction = ReturnType<ValueOf<GuiActions>>

export interface GuiState {
  veilColor: RGBA
  veilTransitionTime: number
}
