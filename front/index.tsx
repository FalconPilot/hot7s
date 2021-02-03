import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { crashGame } from '$front/utils'

console.log('Herro :3')

const rootNode: HTMLElement | null = document.getElementById('rootNode')

if (rootNode == null) {
  throw new Error('Error : No root node found')
}

ReactDOM.render(<div>Coucou :3</div>, rootNode)

window.setTimeout(() => {
  crashGame('Too bad :(')
}, 5000)
