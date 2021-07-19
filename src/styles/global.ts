import { createGlobalStyle } from 'styled-components'

export const ResetStyles = createGlobalStyle`
  :root,
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Arial, sans-serif;
    position: relative;
    padding: 0;
    margin: 0;
    width: 100%;
    max-width: 100vw;
    min-height: 100vh;
    scroll-behavior: smooth;
    background: var(--background, #f5f5f5);
    color: var(--on-background-high-emphasis, rgba(0, 0, 0, 0.87));
  }

  @supports (-webkit-touch-callout: none) {
    :root,
    body {
      min-height: -webkit-fill-available;
    }
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -webkit-tap-highlight: transparent;
  }

  button,
  a {
    cursor: pointer;
    user-select: none;
  }

  [disabled] {
    cursor: default;
  }

  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  }

  .sr-only-focusable:focus,
  .sr-only-focusable:active {
    clip: auto !important;
    -webkit-clip-path: none !important;
    clip-path: none !important;
    height: auto !important;
    margin: auto !important;
    overflow: visible !important;
    width: auto !important;
    white-space: normal !important;
  }

  hr {
    height: 1px;
    min-height: 1px;
    max-height: 1px;
    border: none;
    margin: 1rem 0;
    background-color: var(--on-surface-divider, rgba(0, 0, 0, .12));
  }
  hr.vertical {
    min-height: unset;
    max-height: unset;
    width: 1px;
    max-width: 1px;
    min-width: 1px;
    margin: 0 1rem;
  }
`
export const GlobalStyles = createGlobalStyle`

`
