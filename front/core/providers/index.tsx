import * as React from 'react'

import { ReduxProvider } from './redux'
import { ThemeProvider } from './theme'
import { OverlayProvider } from './overlays'

export const Providers: React.FunctionComponent = ({ children }) => (
  <ReduxProvider>
    <ThemeProvider>
      <OverlayProvider>
        {children}
      </OverlayProvider>
    </ThemeProvider>
  </ReduxProvider>
)
