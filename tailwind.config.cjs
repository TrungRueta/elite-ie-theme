const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
const replaceRem = require('./scripts/tailwind.helper.cjs');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.liquid', './src/**/*.{tsx,ts,jsx,js}'],
  prefix: 'tw-',
  important: true,
  theme: {
    columns: replaceRem(defaultTheme.columns),
    spacing: replaceRem(defaultTheme.spacing),
    borderRadius: replaceRem(defaultTheme.borderRadius),
    fontSize: replaceRem(defaultTheme.fontSize),
    lineHeight: replaceRem(defaultTheme.lineHeight),
    maxWidth: replaceRem(defaultTheme.maxWidth),
    extend: {
      fontFamily: {
        body: 'var(--font-body-family)',
        heading: 'var(--font-heading-family)',
      },
      colors: {
        // bases
        'base-text': 'rgba(var(--color-base-text), <alpha-value>)',
        'base-accent1': 'rgba(var(--color-base-accent-1), <alpha-value>)',
        'base-accent2': 'rgba(var(--color-base-accent-2), <alpha-value>)',
        'base-background1': 'rgba(var(--color-base-background-1), <alpha-value>)',
        'base-background2': 'rgba(var(--color-base-background-2), <alpha-value>)',

        // use scheme variables
        'scheme-foreground': 'rgba(var(--color-foreground), <alpha-value>)',
        'scheme-background': 'rgba(var(--color-background), <alpha-value>)',
        'scheme-text': 'rgba(var(--color-text), <alpha-value>)',

        custom: {
          c1: '#F7F8FB',
        },
      },
      screens: {
        md: '750px',
        '<md': { max: '749px' },
        lg: '990px',
        '<lg': { max: '989px' },
        xl: '1400px',
        '<xl': { max: '1399px' },
        page_width: '1500px',
      },
      spacing: {
        page_mobile: '1.5rem',
        page_desktop: '5rem',
      },
    },
  },
  corePlugins: {
    // preflight: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(({ addUtilities }) => {
      // theme gap grid
      addUtilities({
        '.theme-gap-mobile': {
          'column-gap': 'var(--grid-mobile-horizontal-spacing)',
          'row-gap': 'var(--grid-mobile-vertical-spacing)',
        },
        '.theme-gap-desktop': {
          'column-gap': 'var(--grid-desktop-horizontal-spacing)',
          'row-gap': 'var(--grid-desktop-vertical-spacing)',
        },
      });
    }),
  ],
};
