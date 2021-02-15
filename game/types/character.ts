// prettier-ignore
export type CharacterAttributeValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20

export interface CharacterAttributes {
  strength: CharacterAttributeValue
}

export interface Character {
  id: string
  name: string
}

export interface CharacterEntity extends Character {
  sp: number
}

export type PartyCharacter = Character | null

export type Party = [PartyCharacter, PartyCharacter, PartyCharacter, PartyCharacter]
