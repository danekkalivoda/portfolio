module.exports = {
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      spacing: {
        '80': '20rem',
        '108': '27rem',
        'screen': '100vh'
      },
      borderWidth: {
        '14': '14px',
      }
    },
    fluidContainer: {
      'default': {
        maxWidth: '1100px',   // defaults to null (no maximum width)
        padding: '0px',      // defaults to '15px'
        responsivePadding: {  // defaults to {}
          //'sm': '10px',       // at screen 'sm', the padding will change to 30px
        },
      },
    },
    zIndex: {
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '-10': -10,
      '-20': -20,
      '-30': -30,
      '-40': -40,
      '-50': -50,
    },  
    colors: {
      transparent: 'transparent',
      black: '#141823',
      white: '#fff',
      green: {
        100: '#f0fff4',
        200: '#c6f6d5',
        300: '#9ae6b4',
        400: '#68d391',
        500: '#48bb78',
        600: '#38a169',
        700: '#2f855a',
        800: '#276749',
        900: '#22543d',
      },

      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
    },
    lineHeight: {
      none: 1,
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
      loose: 2,
    },
    fontFamily: {
      sans: [
        'IBM Plex Sans',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    transitionProperty: { // defaults to these values
      'none': 'none',
      'all': 'all',
      'color': 'color',
      'bg': 'background-color',
      'border': 'border-color',
      'colors': ['color', 'background-color', 'border-color'],
      'opacity': 'opacity',
      'transform': 'transform',
    },
    transitionDuration: { // defaults to these values
      'default': '250ms',
      '0': '0ms',
      '100': '100ms',
      '250': '250ms',
      '500': '500ms',
      '750': '750ms',
      '1000': '1000ms',
    },
    transitionTimingFunction: { // defaults to these values
      'default': 'ease',
      'linear': 'linear',
      'ease': 'ease',
      'ease-in': 'ease-in',
      'ease-out': 'ease-out',
      'ease-in-out': 'ease-in-out',
    },
    transitionDelay: { // defaults to these values
      'default': '0ms',
      '0': '0ms',
      '100': '100ms',
      '250': '250ms',
      '500': '500ms',
      '750': '750ms',
      '1000': '1000ms',
    },
    willChange: { // defaults to these values
      'auto': 'auto',
      'scroll': 'scroll-position',
      'contents': 'contents',
      'opacity': 'opacity',
      'transform': 'transform',
    },
    transform: { // defaults to this value
      'none': 'none',
    },
    translate: { // defaults to {}
      '1/2': '50%',
      'full': '100%',
      '-full': '-100%',
      '-1/2': '-50%',
    },
    rotate: { // defaults to {}
      '90': '90deg',
      '-90': '-90deg',
      '180': '180deg',
      '270': '270deg',
      '3d': ['0', '1', '0.5', '45deg'],
    },
    transformOrigin: { // defaults to these values
      't': 'top',
      'tr': 'top right',
      'r': 'right',
      'br': 'bottom right',
      'b': 'bottom',
      'bl': 'bottom left',
      'l': 'left',
      'tl': 'top left',
    },
  },
  variants: {
    fluidContainer: ['responsive'],

    transitionProperty: ['responsive'],
    transitionDuration: ['responsive'],
    transitionTimingFunction: ['responsive'],
    transitionDelay: ['responsive'],
    willChange: ['responsive'],
    rotate: ['responsive'],
    transformOrigin: ['responsive'],

    backgroundColor: ['hover', 'responsive', 'dark', 'dark-hover', 'dark-group-hover'],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active', 'responsive', 'hover', 'focus', 'active', 'group-hover']

  },
  plugins: [
    require('tailwindcss-fluid-container')({
      componentPrefix: 'c-',  // defaults to 'c-'
      widthUtilities: true,   // defaults to true
      paddingUtilities: true, // defaults to true
      marginUtilities: true,  // defaults to true
      negativeMarginUtilities: true,  // defaults to true
    }),
    require('tailwindcss-transitions')(),
    require('tailwindcss-dark-mode')(),
    require('tailwindcss-transforms')({
      '3d': false, // defaults to false
    })
  ]
}
