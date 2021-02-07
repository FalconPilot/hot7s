import * as React from 'react'
import { globalStyles } from '$front/theme'
import { Global } from '@emotion/react'

export const ThemeProvider: React.FunctionComponent = ({ children }) => (
  <>
    <Global styles={globalStyles} />
    {children}
  </>
)
