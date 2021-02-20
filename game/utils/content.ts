import fs from 'fs'
import path from 'path'

import { GameContentType } from '$game/types'
import { checkExhaustive } from './common'

const contentsPath: string = path.resolve(__dirname, '..', 'contents')

const getExtension = (contentType: GameContentType): string => {
  switch (contentType) {
    case GameContentType.Dialog: return 'json'
  }
  checkExhaustive(contentType)
}

export const loadJsons = <Content>(
  contentType: GameContentType,
  decoder: (x: unknown) => Content
): Content[] => (
  fs.readdirSync(path.resolve(contentsPath, contentType))
    .filter(filename => {
      const regex: RegExp = RegExp(`^*\.${getExtension(contentType)}$`)
      return filename.match(regex)
    })
    .map(filename => {
      const contents: string = fs.readFileSync(path.resolve(contentsPath, contentType, filename), 'utf-8')
      return decoder(JSON.parse(contents))
  })
)
