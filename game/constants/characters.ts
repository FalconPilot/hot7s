import { Character } from '$game/types'

export const sigma: Character = {
  id: 'sigma',
  name: 'Sigma',
}

export const conan: Character = {
  id: 'conan',
  name: 'Conan',
}

export const characters = {
  sigma,
  conan,
} as const
