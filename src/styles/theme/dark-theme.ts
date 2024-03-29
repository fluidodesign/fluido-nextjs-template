import { createGlobalStyle } from 'styled-components'

/****************************************
 *             Tema escuro              *
 ****************************************/

export const DarkThemeStyle = createGlobalStyle`
:root {
  --dark-background: #121212;
  --dark-on-background-high-emphasis: rgba(255, 255, 255, 0.87);
  --dark-on-background-medium-emphasis: rgba(255, 255, 255, 0.6);
  --dark-on-background-disabled: rgba(255, 255, 255, 0.38);
  --dark-on-background-divider: rgba(255, 255, 255, 0.12);

  --dark-surface: var(--dark-background);
  --dark-on-surface-high-emphasis: var(--dark-on-background-high-emphasis);
  --dark-on-surface-medium-emphasis: var(--dark-on-background-medium-emphasis);
  --dark-on-surface-disabled: var(--dark-on-background-disabled);
  --dark-on-surface-divider: var(--dark-on-background-divider);

  --dark-primary: var(--primary-200);
  --dark-primary-variant: var(--primary-400);
  --dark-on-primary-high-emphasis: rgba(0, 0, 0, 1);
  --dark-on-primary-medium-emphasis: rgba(0, 0, 0, 0.74);
  --dark-on-primary-disabled: rgba(0, 0, 0, 0.38);
  --dark-on-primary-divider: rgba(0, 0, 0, 0.15);

  --dark-secondary: var(--secondary-200);
  --dark-on-secondary: rgba(0, 0, 0, 1);

  --dark-error: #cf6679;
  --dark-on-error: #000;
  --dark-warning: #c1b263;
  --dark-on-warning: #000;
  --dark-info: #64a6c5;
  --dark-on-info: #fff;
  --dark-success: #8ac565;
  --dark-on-success: #000;

  --dark-transparent: rgba(255, 255, 255, 0);

  --dark-elevation: #fff;
  --dark-elevation-umbra: rgba(0, 0, 0, 0.2);
  --dark-elevation-penumbra: rgba(0, 0, 0, 0.14);
  --dark-elevation-ambient: rgba(0, 0, 0, 0.12);
}
`
