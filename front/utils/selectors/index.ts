import { AppState, GuiState, SystemState } from '$front/types'

export const systemSelector = (state: AppState): SystemState => state.system
export const guiSelector = (state: AppState): GuiState => state.gui
