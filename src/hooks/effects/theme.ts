import { createState } from '@hookstate/core'
import { Persistence } from '@hookstate/persistence'

type ThemeProps = 'light' | 'dark' | null

const ThemeState = createState<ThemeProps>(null)

if (process.browser) {
  ThemeState.attach(Persistence('fl-style-theme-selected'))

  ThemeState.batch((s) => {
    if (process.browser) {
      const html = document.documentElement
      switch (s.value) {
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
  })
}

export default ThemeState
