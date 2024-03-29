import { createGlobalStyle, css } from 'styled-components'

const darkTheme = css`
  /* Z-index Overlays */

  .elevation-0::after {
    opacity: 0;
  }
  .elevation-1::after {
    opacity: 0.05;
  }
  .elevation-2::after {
    opacity: 0.07;
  }
  .elevation-3::after {
    opacity: 0.08;
  }
  .elevation-4::after {
    opacity: 0.09;
  }
  .elevation-5::after {
    opacity: 0.1;
  }
  .elevation-6::after {
    opacity: 0.11;
  }
  .elevation-7::after {
    opacity: 0.11;
  }
  .elevation-8::after {
    opacity: 0.12;
  }
  .elevation-9::after {
    opacity: 0.12;
  }
  .elevation-10::after {
    opacity: 0.12;
  }
  .elevation-11::after {
    opacity: 0.12;
  }
  .elevation-12::after {
    opacity: 0.14;
  }
  .elevation-13::after {
    opacity: 0.14;
  }
  .elevation-14::after {
    opacity: 0.14;
  }
  .elevation-15::after {
    opacity: 0.14;
  }
  .elevation-16::after {
    opacity: 0.15;
  }
  .elevation-17::after {
    opacity: 0.15;
  }
  .elevation-18::after {
    opacity: 0.15;
  }
  .elevation-19::after {
    opacity: 0.15;
  }
  .elevation-20::after {
    opacity: 0.15;
  }
  .elevation-21::after {
    opacity: 0.15;
  }
  .elevation-22::after {
    opacity: 0.15;
  }
  .elevation-23::after {
    opacity: 0.15;
  }
  .elevation-24::after {
    opacity: 0.16;
  }

  .elevation::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--elevation, #fff);
    border-radius: inherit;
    opacity: 0;
    z-index: -1;
  }
`

/****************************************
 *               Elevação               *
 ****************************************/

export const ElevationStyle = createGlobalStyle`
  .elevation {
    position: relative;
    z-index: 0;
    transition:
      box-shadow var(--elevation-time, 250ms linear),
      opacity var(--elevation-time, 250ms linear);
  }

// Elevation Shadows

.elevation-0 {
  box-shadow: 0px 0px 0px 0px var(--elevation-umbra, rgba(0, 0, 0, 0.2)),
    0px 0px 0px 0px var(--elevation-penumbra, rgba(0, 0, 0, 0.14)),
    0px 0px 0px 0px var(--elevation-ambient, rgba(0, 0, 0, 0.12));
}
.elevation-1 {
  box-shadow: 0px 2px 1px -1px var(--elevation-umbra, rgba(0, 0, 0, 0.2)),
    0px 1px 1px 0px var(--elevation-penumbra, rgba(0, 0, 0, 0.14)),
    0px 1px 3px 0px var(--elevation-ambient, rgba(0, 0, 0, 0.12));
}
.elevation-2 {
  box-shadow: 0px 3px 1px -2px var(--elevation-umbra, rgba(0, 0, 0, 0.2)),
    0px 2px 2px 0px var(--elevation-penumbra, rgba(0, 0, 0, 0.14)),
    0px 1px 5px 0px var(--elevation-ambient, rgba(0, 0, 0, 0.12));
}
.elevation-3 {
  box-shadow: 0px 3px 3px -2px var(--elevation-umbra, rgba(0, 0, 0, 0.2)),
    0px 3px 4px 0px var(--elevation-penumbra, rgba(0, 0, 0, 0.14)),
    0px 1px 8px 0px var(--elevation-ambient, rgba(0, 0, 0, 0.12));
}
.elevation-4 {
  box-shadow: 0px 2px 4px -1px var(--elevation-umbra, rgba(0, 0, 0, 0.2)),
    0px 4px 5px 0px var(--elevation-penumbra, rgba(0, 0, 0, 0.14)),
    0px 1px 10px 0px var(--elevation-ambient, rgba(0, 0, 0, 0.12));
}
.elevation-5 {
  box-shadow: 0px 3px 5px -1px var(--elevation-umbra, rgba(0, 0, 0, 0.2)),
    0px 5px 8px 0px var(--elevation-penumbra, rgba(0, 0, 0, 0.14)),
    0px 1px 14px 0px var(--elevation-ambient, rgba(0, 0, 0, 0.12));
}
.elevation-6 {
  box-shadow: 0px 3px 5px -1px var(--elevation-umbra, rgba(0, 0, 0, 0.2)),
    0px 6px 10px 0px var(--elevation-penumbra, rgba(0, 0, 0, 0.14)),
    0px 1px 18px 0px var(--elevation-ambient, rgba(0, 0, 0, 0.12));
}
.elevation-7 {
  box-shadow: 0px 4px 5px -2px var(--elevation-umbra, rgba(0, 0, 0, 0.2)),
    0px 7px 10px 1px var(--elevation-penumbra, rgba(0, 0, 0, 0.14)),
    0px 2px 16px 1px var(--elevation-ambient, rgba(0, 0, 0, 0.12));
}
.elevation-8 {
  box-shadow: 0px 5px 5px -3px var(--elevation-umbra, rgba(0, 0, 0, 0.2)),
    0px 8px 10px 1px var(--elevation-penumbra, rgba(0, 0, 0, 0.14)),
    0px 3px 14px 2px var(--elevation-ambient, rgba(0, 0, 0, 0.12));
}
.elevation-9 {
  box-shadow: 0px 5px 6px -3px var(--elevation-umbra, rgba(0, 0, 0, 0.2)),
    0px 9px 12px 1px var(--elevation-penumbra, rgba(0, 0, 0, 0.14)),
    0px 3px 16px 2px var(--elevation-ambient, rgba(0, 0, 0, 0.12));
}
.elevation-10 {
  box-shadow: 0px 6px 6px -3px var(--elevation-umbra, rgba(0, 0, 0, 0.2)),
    0px 10px 14px 1px var(--elevation-penumbra, rgba(0, 0, 0, 0.14)),
    0px 4px 18px 3px var(--elevation-ambient, rgba(0, 0, 0, 0.12));
}
.elevation-11 {
  box-shadow: 0px 6px 7px -4px var(--elevation-umbra, rgba(0, 0, 0, 0.2)),
    0px 11px 15px 1px var(--elevation-penumbra, rgba(0, 0, 0, 0.14)),
    0px 4px 20px 3px var(--elevation-ambient, rgba(0, 0, 0, 0.12));
}
.elevation-12 {
  box-shadow: 0px 7px 8px -4px var(--elevation-umbra, rgba(0, 0, 0, 0.2)),
    0px 12px 17px 2px var(--elevation-penumbra, rgba(0, 0, 0, 0.14)),
    0px 5px 22px 4px var(--elevation-ambient, rgba(0, 0, 0, 0.12));
}
.elevation-13 {
  box-shadow: 0px 7px 8px -4px var(--elevation-umbra, rgba(0, 0, 0, 0.2)),
    0px 13px 19px 2px var(--elevation-penumbra, rgba(0, 0, 0, 0.14)),
    0px 5px 24px 4px var(--elevation-ambient, rgba(0, 0, 0, 0.12));
}
.elevation-14 {
  box-shadow: 0px 7px 9px -4px var(--elevation-umbra, rgba(0, 0, 0, 0.2)),
    0px 14px 21px 2px var(--elevation-penumbra, rgba(0, 0, 0, 0.14)),
    0px 5px 26px 4px var(--elevation-ambient, rgba(0, 0, 0, 0.12));
}
.elevation-15 {
  box-shadow: 0px 8px 9px -5px var(--elevation-umbra, rgba(0, 0, 0, 0.2)),
    0px 15px 22px 2px var(--elevation-penumbra, rgba(0, 0, 0, 0.14)),
    0px 6px 28px 5px var(--elevation-ambient, rgba(0, 0, 0, 0.12));
}
.elevation-16 {
  box-shadow: 0px 8px 10px -5px var(--elevation-umbra, rgba(0, 0, 0, 0.2)),
    0px 16px 24px 2px var(--elevation-penumbra, rgba(0, 0, 0, 0.14)),
    0px 6px 30px 5px var(--elevation-ambient, rgba(0, 0, 0, 0.12));
}
.elevation-17 {
  box-shadow: 0px 8px 11px -5px var(--elevation-umbra, rgba(0, 0, 0, 0.2)),
    0px 17px 26px 2px var(--elevation-penumbra, rgba(0, 0, 0, 0.14)),
    0px 6px 32px 5px var(--elevation-ambient, rgba(0, 0, 0, 0.12));
}
.elevation-18 {
  box-shadow: 0px 9px 11px -5px var(--elevation-umbra, rgba(0, 0, 0, 0.2)),
    0px 18px 28px 2px var(--elevation-penumbra, rgba(0, 0, 0, 0.14)),
    0px 7px 34px 6px var(--elevation-ambient, rgba(0, 0, 0, 0.12));
}
.elevation-19 {
  box-shadow: 0px 9px 12px -6px var(--elevation-umbra, rgba(0, 0, 0, 0.2)),
    0px 19px 29px 2px var(--elevation-penumbra, rgba(0, 0, 0, 0.14)),
    0px 7px 36px 6px var(--elevation-ambient, rgba(0, 0, 0, 0.12));
}
.elevation-20 {
  box-shadow: 0px 10px 13px -6px var(--elevation-umbra, rgba(0, 0, 0, 0.2)),
    0px 20px 31px 3px var(--elevation-penumbra, rgba(0, 0, 0, 0.14)),
    0px 8px 38px 7px var(--elevation-ambient, rgba(0, 0, 0, 0.12));
}
.elevation-21 {
  box-shadow: 0px 10px 13px -6px var(--elevation-umbra, rgba(0, 0, 0, 0.2)),
    0px 21px 33px 3px var(--elevation-penumbra, rgba(0, 0, 0, 0.14)),
    0px 8px 40px 7px var(--elevation-ambient, rgba(0, 0, 0, 0.12));
}
.elevation-22 {
  box-shadow: 0px 10px 14px -6px var(--elevation-umbra, rgba(0, 0, 0, 0.2)),
    0px 22px 35px 3px var(--elevation-penumbra, rgba(0, 0, 0, 0.14)),
    0px 8px 42px 7px var(--elevation-ambient, rgba(0, 0, 0, 0.12));
}
.elevation-23 {
  box-shadow: 0px 11px 14px -7px var(--elevation-umbra, rgba(0, 0, 0, 0.2)),
    0px 23px 36px 3px var(--elevation-penumbra, rgba(0, 0, 0, 0.14)),
    0px 9px 44px 8px var(--elevation-ambient, rgba(0, 0, 0, 0.12));
}
.elevation-24 {
  box-shadow: 0px 11px 15px -7px var(--elevation-umbra, rgba(0, 0, 0, 0.2)),
    0px 24px 38px 3px var(--elevation-penumbra, rgba(0, 0, 0, 0.14)),
    0px 9px 46px 8px var(--elevation-ambient, rgba(0, 0, 0, 0.12));
}

// Elevation overlay

:root[dark-theme] {
  ${darkTheme}
}

@media (prefers-color-scheme: dark) {
  :root:not([light-theme]) {
    ${darkTheme}
  }
}
`
