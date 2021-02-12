import { useEffect } from 'react'
import PropTypes from 'prop-types'

const ThemeSwitch = ({ theme = '' }) => {
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

ThemeSwitch.propTypes = {
  theme: PropTypes.oneOf(['', 'light', 'dark']),
}

export default ThemeSwitch
