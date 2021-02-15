import locales from '$front/locale'
import { ActionCreator, ActionCreatorWithPayload } from '$front/types'
import { ValueOf } from '$game/types'

export interface DialogChoice {
  text: {
    [k in keyof typeof locales]: string
  }
  target: Dialog | null
}

export interface DialogBox {
  interlocutor: string | null
  text: string
  charLeftArt: string
  charRightArt: string
  choices?: DialogChoice[]
}

export type Dialog = DialogBox[]

// == START
// Start a new dialog from the beginning
// == SWITCH
// Switch seamlessly to another dialog.
// Possibly, the dialog line's index can be passed
// == NEXT
// Go to the next dialog line
// == END
// Terminate the current dialog and go back to the game
export enum DialogActionKey {
  START = 'DIALOG/START',
  SWITCH = 'DIALOG/SWITCH',
  NEXT = 'DIALOG/NEXT',
  END = 'DIALOG/END',
}

export type DialogActionCreator<AK extends DialogActionKey> = ActionCreator<AK>
export type DialogActionCreatorWithPayload<
  AK extends DialogActionKey,
  Payload
> = ActionCreatorWithPayload<AK, Payload>

export interface DialogActions {
  start: DialogActionCreatorWithPayload<DialogActionKey.START, Dialog>
  switch: DialogActionCreatorWithPayload<DialogActionKey.SWITCH, Dialog | [Dialog, number]>
  next: DialogActionCreator<DialogActionKey.NEXT>
  end: DialogActionCreator<DialogActionKey.END>
}

export type DialogAction = ReturnType<ValueOf<DialogActions>>

export interface DialogState {
  currentDialog: [Dialog, number] | null
}
