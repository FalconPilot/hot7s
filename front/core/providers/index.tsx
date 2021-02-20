import * as React from 'react'

import { ReduxProvider } from './redux'
import { ThemeProvider } from './theme'
import { OverlayProvider } from './overlays'
import { VeilProvider } from './veil'
import { InteractorProvider } from './interactor'

const GraphicalStack: React.FunctionComponent = ({ children }) => (
  <>
    <InteractorProvider />
    <OverlayProvider />
    <VeilProvider />
    {children}
  </>
)

export const Providers: React.FunctionComponent = ({ children }) => (
  <ReduxProvider>
    <ThemeProvider>
      <GraphicalStack>
        {children}
      </GraphicalStack>
    </ThemeProvider>
  </ReduxProvider>
)
