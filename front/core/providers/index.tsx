import * as React from 'react'

import { ReduxProvider } from './redux'
import { ThemeProvider } from './theme'

export const Providers: React.FunctionComponent = ({ children }) => (
  <ReduxProvider>
    <ThemeProvider>
      {children}
    </ThemeProvider>
  </ReduxProvider>
)
