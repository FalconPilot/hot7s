export enum GameMap {
  GAMESTART = 'GAMESTART',
}

export interface GameState {
  gameVars: {
    currentMapId: GameMap
  }
}
