import * as React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, compose, createStore, Store } from 'redux'

import { GameAction, GameState } from '$front/types'
import { reducers } from '$front/reducers'

const store: Store<GameState, GameAction> = createStore(
  combineReducers(reducers),
  compose(applyMiddleware()),
)

export const ReduxProvider: React.FunctionComponent = ({ children }) => (
  <Provider store={store}>{children}</Provider>
)
