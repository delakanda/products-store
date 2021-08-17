import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from '@app/components/Header'
import { useTheme } from '@app/themes/useTheme'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@app/themes/GlobalStyles'
import Routes from '@app/routes/Routes'

function App () {
  const { theme, themeLoaded } = useTheme()
  return (
    <Router>
      {themeLoaded &&
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header />

          <Routes />
        </ThemeProvider>
      }
    </Router>
  )
}

export default App
