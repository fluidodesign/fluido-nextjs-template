import { createGlobalStyle } from 'styled-components'

/****************************************
 *              Tema claro              *
 ****************************************/

export const LightThemeStyle = createGlobalStyle`
 :root {
   --light-background: #f5f5f5;
   --light-on-background-high-emphasis: rgba(0, 0, 0, 0.87);
   --light-on-background-medium-emphasis: rgba(0, 0, 0, 0.6);
   --light-on-background-disabled: rgba(0, 0, 0, 0.38);
   --light-on-background-divider: rgba(0, 0, 0, 0.12);
 
   --light-surface: #fff;
   --light-on-surface-high-emphasis: var(--light-on-background-high-emphasis);
   --light-on-surface-medium-emphasis: var(
     --light-on-background-medium-emphasis
   );
   --light-on-surface-disabled: var(--light-on-background-disabled);
   --light-on-surface-divider: var(--light-on-background-divider);
 
   --light-primary: var(--primary-500);
   --light-primary-variant: var(--primary-700);
   --light-on-primary-high-emphasis: rgba(255, 255, 255, 1);
   --light-on-primary-medium-emphasis: rgba(255, 255, 255, 0.74);
   --light-on-primary-disabled: rgba(255, 255, 255, 0.38);
   --light-on-primary-divider: rgba(255, 255, 255, 0.15);
 
   --light-secondary: var(--secondary-200);
   --light-on-secondary: #000;
 
   --light-error: #b00020;
   --light-on-error: #fff;
   --light-warning: #ffd600;
   --light-on-warning: #000;
   --light-info: #03a9f4;
   --light-on-info: #fff;
   --light-success: #55dd00;
   --light-on-success: #000;
 
   --light-transparent: rgba(255, 255, 255, 0);
 
   --light-elevation: var(--light-surface);
   --light-elevation-umbra: rgba(0, 0, 0, 0.2);
   --light-elevation-penumbra: rgba(0, 0, 0, 0.14);
   --light-elevation-ambient: rgba(0, 0, 0, 0.12);
 }
 `
