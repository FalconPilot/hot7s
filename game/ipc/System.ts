import { IpcSystemMessages, SaveGame, SetOptions } from '$game/types'
import { messageHandler } from '$game/utils'

// Save game
export const saveGameHandler = messageHandler<SaveGame>(IpcSystemMessages.GAME_SAVE)

// Set options
export const setOptionsHandler = messageHandler<SetOptions>(IpcSystemMessages.SET_OPTIONS)
