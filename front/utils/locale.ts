import locales from '$front/locale'
import { CombinedLocale } from '$front/types'

export const text = (locale: keyof typeof locales): CombinedLocale => locales[locale]
