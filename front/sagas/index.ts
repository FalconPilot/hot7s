import { all, ForkEffect } from 'redux-saga/effects'

import system from './system'

export function* combineSagas(sagas: Array<ForkEffect<never>>): Generator {
  yield all(sagas)
}

export const sagas: Array<ForkEffect<never>> = [
  ...system,
]
