import locales from '$front/locale'

export interface GameWindow extends Window {
  locale: keyof typeof locales
}
