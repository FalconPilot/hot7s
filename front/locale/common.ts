import locales from '$front/locale'

export const gameTitle: string = 'House of the 7th Star'

export const languageNames: { [k in keyof typeof locales]: string } = {
  en: 'English',
  fr: 'Français',
}
