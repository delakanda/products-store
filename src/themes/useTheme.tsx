import { useEffect, useState } from 'react'
import DataTheme from './theme.json'

export const useTheme = () => {
  const [theme, setTheme] = useState(DataTheme.default)
  const [themeLoaded, setThemeLoaded] = useState(false)

  const setAppTheme = (themeName: string) => {
    setTheme(themeName)
  }

  useEffect(() => {
    setThemeLoaded(true)
  }, [])

  return { theme, themeLoaded, setAppTheme }
}
