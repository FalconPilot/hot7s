import * as React from 'react'
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga'
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, compose, createStore, Middleware, Store } from 'redux'

import { GameAction, GameState } from '$front/types'
import { reducers } from '$front/reducers'
import { combineSagas, sagas } from '$front/sagas'

const sagaMiddleware: SagaMiddleware = createSagaMiddleware()

// Redux middlewares list
const middlewares: Middleware[] = [
  sagaMiddleware,
]

// Create store
const store: Store<GameState, GameAction> = createStore(
  combineReducers(reducers),
  compose(applyMiddleware(...middlewares)),
)

// Run sagas
sagaMiddleware.run(combineSagas, sagas)

export const ReduxProvider: React.FunctionComponent = ({ children }) => (
  <Provider store={store}>{children}</Provider>
)
