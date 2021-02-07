import { SystemActionKey } from '$front/types'
import { noOp, sendMessage, systemSelector } from '$front/utils'
import { IpcSystemMessages, QuitGame, SaveOptions } from '$game/types'
import { ForkEffect, select, takeLatest } from 'redux-saga/effects'

function * saveOptions () {
  const { options } = yield select(systemSelector)
  yield sendMessage<SaveOptions>(IpcSystemMessages.SAVE_OPTIONS)(options)(noOp)
}

function * quitGame () {
  yield sendMessage<QuitGame>(IpcSystemMessages.GAME_QUIT)(null)(noOp)
}

const systemSagas: Array<ForkEffect<never>> = [
  takeLatest(SystemActionKey.SAVE_OPTIONS, saveOptions),
  takeLatest(SystemActionKey.GAME_QUIT, quitGame),
]

export default systemSagas
