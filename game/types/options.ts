import locales from '$front/locale'
export interface ResolutionOptions {
  windowHeight: number
  windowWidth: number
}

export interface GameOptions {
  language: keyof typeof locales
}

export interface AppOptions {
  resolution: ResolutionOptions
  game: GameOptions
}
