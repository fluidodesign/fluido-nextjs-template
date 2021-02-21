import { useEffect } from 'react'

interface ThemeSwitchProps {
  theme?: 'light' | 'dark'
}

const ThemeSwitch: React.FunctionComponent<ThemeSwitchProps> = ({ theme }) => {
  useEffect(() => {
    if (process.browser) {
      const html = document.documentElement

      switch (theme) {
        case 'light':
          html.setAttribute('light-theme', '')
          html.removeAttribute('dark-theme')
          break
        case 'dark':
          html.setAttribute('dark-theme', '')
          html.removeAttribute('light-theme')
          break
        default:
          html.removeAttribute('dark-theme')
          html.removeAttribute('light-theme')
      }
    }
  }, [process.browser, theme])

  return <></>
}

export default ThemeSwitch
