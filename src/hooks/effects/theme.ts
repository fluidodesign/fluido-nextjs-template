import { createState, useState } from '@hookstate/core'
import { Persistence } from '@hookstate/persistence'
import { useEffect } from 'react'

type ThemeProps = 'light' | 'dark' | null

const ThemeState = createState<ThemeProps>(null)

if (process.browser) {
  ThemeState.attach(Persistence('fl-style-theme-selected'))
}

export const useTheme = () => {
  const state = useState(ThemeState)

  useEffect(() => {
    if (process.browser) {
      const html = document.documentElement
      switch (state.value) {
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
  }, [process.browser, state.value])

  return state
}
