import * as React from 'react'
import * as ReactDOM from 'react-dom'

console.log('Herro :3')

const rootNode: HTMLElement | null = document.getElementById('rootNode')

if (rootNode == null) {
  throw new Error('Error : No root node found')
}

ReactDOM.render(<div>Coucou :3</div>, rootNode)
