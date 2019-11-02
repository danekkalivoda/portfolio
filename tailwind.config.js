module.exports = {
  corePlugins: {
    container: true,
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
        '64': '64px', 
      },
      inset: {
        'full' : '100%',
        '1/2' : '50%'
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
    aspectRatio: { // defaults to {}
      'square': [1, 1],
      '16/9': [16, 9],
      '16/10': [16, 10],
      '4/3': [4, 3],
      '21/9': [21, 9],
    },
    zIndex: {
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '60': 60,
      '70': 70,
      '80': 80,
      '90': 90,
      '100': 100,
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

      yellow: {
        100: '#fffff0',
        200: '#fefcbf',
        300: '#faf089',
        400: '#f6e05e',
        500: '#ecc94b',
        600: '#d69e2e',
        700: '#b7791f',
        800: '#975a16',
        900: '#744210',
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
      teal: {
        100: '#e6fffa',
        200: '#b2f5ea',
        300: '#81e6d9',
        400: '#4fd1c5',
        500: '#38b2ac',
        600: '#319795',
        700: '#2c7a7b',
        800: '#285e61',
        900: '#234e52',
      },
      blue: {
        100: '#ebf8ff',
        200: '#bee3f8',
        300: '#90cdf4',
        400: '#63b3ed',
        500: '#4299e1',
        600: '#3182ce',
        700: '#2b6cb0',
        800: '#2c5282',
        900: '#2a4365',
      },
      indigo: {
        100: '#ebf4ff',
        200: '#c3dafe',
        300: '#a3bffa',
        400: '#7f9cf5',
        500: '#667eea',
        600: '#5a67d8',
        700: '#4c51bf',
        800: '#434190',
        900: '#3c366b',
      }
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
        'Nunito sans',
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
      '0': '0',
      'center': ['100%', '100%'],
      '-center': ['-100%', '-100%'],
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
    scale: { // defaults to {}
      '90': '0.9',
      '95': '0.95',
      '100': '1',
      '102': '1.02',
      '105': '1.05',
      '110': '1.1'
    },
  },
  variants: {
    fluidContainer: ['responsive'],

    padding: ['responsive', 'hover', 'focus'],

    transitionProperty: ['responsive'],
    transitionDuration: ['responsive'],
    transitionTimingFunction: ['responsive'],
    transitionDelay: ['responsive'],
    willChange: ['responsive'],
    rotate: ['responsive'],
    transformOrigin: ['responsive'],
    scale: ['group-hover', 'hover','responsive'],

    aspectRatio: ['responsive'],
    translate: ['responsive','group-hover'],
    opacity: ['responsive','group-hover'],
    boxShadow: ['responsive','group-hover'],

    backgroundColor: ['hover', 'responsive', 'dark', 'dark-hover', 'dark-group-hover'],
    borderColor: ['dark', 'dark-hover', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active', 'responsive', 'hover', 'focus', 'active', 'group-hover'],
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
    }),
    require('tailwindcss-aspect-ratio')(),
  ]
};
