import { App } from 'electron'

import { GameWindows } from '$game/types'

import system from './system'

export const handleResponses = (app: App, windows: GameWindows) =>
  [
    ...system,
  ].forEach((handler) => handler(app, windows))
