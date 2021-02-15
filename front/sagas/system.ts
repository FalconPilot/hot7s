import { quitGame, saveOptions } from '$front/ipc'
import { SystemActionKey } from '$front/types'
import { systemSelector } from '$front/utils'
import { ForkEffect, select, takeLatest } from 'redux-saga/effects'

function* saveOptionsEffect() {
  const { options } = yield select(systemSelector)
  yield saveOptions(options)
}

function* quitGameEffect() {
  yield quitGame()
}

const systemSagas: Array<ForkEffect<never>> = [
  takeLatest(SystemActionKey.SAVE_OPTIONS, saveOptionsEffect),
  takeLatest(SystemActionKey.GAME_QUIT, quitGameEffect),
]

export default systemSagas
