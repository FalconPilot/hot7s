import { GameWindows } from '$game/types'

import responseHandlers from './back'

export const handleResponses = (windows: GameWindows) =>
  responseHandlers.forEach((handler) => handler(windows))
