import { IpcResponseHandler } from '$game/types'

import systemResponseHandlers from './system'

const responseHandlers: IpcResponseHandler[] = [
  ...systemResponseHandlers
]

export default responseHandlers
