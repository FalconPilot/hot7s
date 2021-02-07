import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Main } from './components'
import { Providers } from './core'

const rootNode: HTMLElement | null = document.getElementById('rootNode')

if (rootNode == null) {
  throw new Error('Error : No root node found')
}

const Game: React.FunctionComponent = () => (
  <Providers>
    <Main />
  </Providers>
)

ReactDOM.render(<Game />, rootNode)
