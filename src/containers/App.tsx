import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Header from '@app/components/Header'
import { useTheme } from '@app/themes/useTheme'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@app/themes/GlobalStyles'
import Routes from '@app/routes/Routes'
import Cart from '@app/pages/Products/components/Cart'

const client = new ApolloClient({
  uri: process.env.GRAPHQL_URL,
  cache: new InMemoryCache()
})

function App () {
  const { theme, themeLoaded } = useTheme()
  return (
    <Router>
      {themeLoaded &&
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />

            <Routes />

            <Cart />
          </ThemeProvider>
        </ApolloProvider>
      }
    </Router>
  )
}

export default App
