import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Main } from '$editor/front/components'

const rootNode: HTMLElement | null = document.getElementById('rootNode')

if (rootNode == null) {
  throw new Error('Error : No root node found')
}

ReactDOM.render(<Main />, rootNode)
