import { createGlobalStyle, css } from 'styled-components'

const darkTheme = css`
  --background: var(--dark-background);
  --on-background-high-emphasis: var(--dark-on-background-high-emphasis);
  --on-background-medium-emphasis: var(--dark-on-background-medium-emphasis);
  --on-background-disabled: var(--dark-on-background-disabled);
  --on-background-divider: var(--dark-on-background-divider);

  --surface: var(--dark-surface);
  --on-surface-high-emphasis: var(--dark-on-surface-high-emphasis);
  --on-surface-medium-emphasis: var(--dark-on-surface-medium-emphasis);
  --on-surface-disabled: var(--dark-on-surface-disabled);
  --on-surface-divider: var(--dark-on-surface-divider);

  --primary: var(--dark-primary);
  --primary-variant: var(--dark-primary-variant);
  --on-primary-high-emphasis: var(--dark-on-primary-high-emphasis);
  --on-primary-medium-emphasis: var(--dark-on-primary-medium-emphasis);
  --on-primary-disabled: var(--dark-on-primary-disabled);
  --on-primary-divider: var(--dark-on-primary-divider);

  --secondary: var(--dark-secondary);
  --on-secondary: var(--dark-on-secondary);

  --error: var(--dark-error);
  --on-error: var(--dark-on-error);
  --warning: var(--dark-warning);
  --on-warning: var(--dark-on-warning);
  --info: var(--dark-info);
  --on-info: var(--dark-on-info);
  --success: var(--dark-success);
  --on-success: var(--dark-on-success);

  --transparent: var(--dark-transparent);

  --elevation: var(--dark-elevation);
  --elevation-umbra: var(--dark-elevation-umbra);
  --elevation-penumbra: var(--dark-elevation-penumbra);
  --elevation-ambient: var(--dark-elevation-ambient);
`

/****************************************
 *           Tematização base           *
 ****************************************/

export const BaselineStyle = createGlobalStyle`
  :root {
    // Color Theme
    --primary-50: var(--theme-primary-50, #f2e7fe);
    --primary-100: var(--theme-primary-100, #dbb2ff);
    --primary-200: var(--theme-primary-200, #bb86fc);
    --primary-300: var(--theme-primary-300, #985eff);
    --primary-400: var(--theme-primary-400, #7f39fb);
    --primary-500: var(--theme-primary-500, #6200ee);
    --primary-600: var(--theme-primary-600, #5600e8);
    --primary-700: var(--theme-primary-700, #3700b3);
    --primary-800: var(--theme-primary-800, #30009c);
    --primary-900: var(--theme-primary-900, #23036a);
  
    --secondary-50: var(--theme-secondary-50, #c8fff4);
    --secondary-100: var(--theme-secondary-100, #70efde);
    --secondary-200: var(--theme-secondary-200, #03dac5);
    --secondary-300: var(--theme-secondary-300, #00c4b4);
    --secondary-400: var(--theme-secondary-400, #00b3a6);
    --secondary-500: var(--theme-secondary-500, #01a299);
    --secondary-600: var(--theme-secondary-600, #019592);
    --secondary-700: var(--theme-secondary-700, #018786);
    --secondary-800: var(--theme-secondary-800, #017374);
    --secondary-900: var(--theme-secondary-900, #005457);
  }
  
  :root,
  :root[light-theme] {
    --background: var(--light-background, #f5f5f5);
    --on-background-high-emphasis: var(
      --light-on-background-high-emphasis,
      rgba(0, 0, 0, 0.87)
    );
    --on-background-medium-emphasis: var(
      --light-on-background-medium-emphasis,
      rgba(0, 0, 0, 0.6)
    );
    --on-background-disabled: var(
      --light-on-background-disabled,
      rgba(0, 0, 0, 0.38)
    );
    --on-background-divider: var(
      --light-on-background-divider,
      rgba(0, 0, 0, 0.12)
    );
  
    --surface: var(--light-surface, #fff);
    --on-surface-high-emphasis: var(
      --light-on-surface-high-emphasis,
      var(--on-background-high-emphasis)
    );
    --on-surface-medium-emphasis: var(
      --light-on-surface-medium-emphasis,
      var(--on-background-medium-emphasis)
    );
    --on-surface-disabled: var(
      --light-on-surface-disabled,
      var(--on-background-disabled)
    );
    --on-surface-divider: var(
      --light-on-surface-divider,
      var(--on-background-divider)
    );
  
    --primary: var(--light-primary, var(--primary-500));
    --primary-variant: var(--light-primary-variant, var(--primary-700));
    --on-primary-high-emphasis: var(
      --light-on-primary-high-emphasis,
      rgba(255, 255, 255, 1)
    );
    --on-primary-medium-emphasis: var(
      --light-on-primary-medium-emphasis,
      rgba(255, 255, 255, 0.74)
    );
    --on-primary-disabled: var(
      --light-on-primary-disabled,
      rgba(255, 255, 255, 0.38)
    );
    --on-primary-divider: var(
      --light-on-primary-divider,
      rgba(255, 255, 255, 0.15)
    );
  
    --secondary: var(--light-secondary, var(--secondary-200));
    --on-secondary: var(--light-on-secondary, #000);
  
    --error: var(--light-error, #b00020);
    --on-error: var(--light-on-error, #fff);
    --warning: var(--light-warning, #ffd600);
    --on-warning: var(--light-on-warning, #000);
    --info: var(--light-info, #03a9f4);
    --on-info: var(--light-on-info, #fff);
    --success: var(--light-success, #55dd00);
    --on-success: var(--light-on-success, #000);
  
    --transparent: var(--light-transparent, rgba(255, 255, 255, 0));
  
    --elevation: var(--light-elevation);
    --elevation-umbra: var(--light-elevation-umbra, rgba(0, 0, 0, 0.2));
    --elevation-penumbra: var(--light-elevation-penumbra, rgba(0, 0, 0, 0.14));
    --elevation-ambient: var(--light-elevation-ambient, rgba(0, 0, 0, 0.12));
  }

  
  :root[dark-theme] {
    ${darkTheme}
  }
  
  @media (prefers-color-scheme: dark) {
    :root:not([light-theme]) {
      ${darkTheme}
    }
  }
`
