import path from 'path'

const image = (imagePath: string) => (file: string): string =>
  path.resolve(__dirname, '..', '..', 'game', 'static', 'images', imagePath, file)

export const systemImage = image('system')
