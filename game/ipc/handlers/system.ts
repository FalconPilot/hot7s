import { CrashGame, IpcSystemMessages, SaveGame, SetOptions } from '$game/types'
import { messageHandler } from '$game/utils'

// Crash game
export const crashGame = messageHandler<CrashGame>(IpcSystemMessages.GAME_CRASH)

// Save game
export const saveGame = messageHandler<SaveGame>(IpcSystemMessages.GAME_SAVE)

// Set options
export const setOptions = messageHandler<SetOptions>(IpcSystemMessages.SET_OPTIONS)
