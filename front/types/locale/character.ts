import { CharacterAttributes } from '$game/types'

export type CharacterLocale = {} & { [k in keyof CharacterAttributes]: string }
