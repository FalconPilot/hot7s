import { GameState, SystemState } from "$front/types";

export const systemSelector = (state: GameState): SystemState => state.system
