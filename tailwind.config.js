/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  blocklist: [
    'html',
    'root',
    'body'
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1025px',
      xl: '1201px'
    },
    container: {
      center: true
    },
    fontSize: {
      sm: ['13px'],
      base: ['16px'],
      md: ['19px', '31px']
    },
    extend: {
      fontFamily: {
        'inter': ["var(--base-font)", "serif"],
        'mulish': ["var(--base-font2)"],
        'raleway': ["var(--base-font3)"],
        'fontIcons': ["var(--font-icons)"]
      },
      screens: {
        'xl-max': {'max': '1200px'},
        'lg-max': {'max': '1024px'},
        'md-min': {'min': '768px'},
        'md-max': {'max': '767px'},
        'only-md': [
          {'max': '767px', 'min': '576px'}
        ],
        'only-lg': [
          {'max': '1024px', 'min': '768px'}
        ],
        'only-xl': [
          {'max': '1200px', 'min': '1025px'}
        ],
        'sm-max': {'max': '575px'},
        '690-min': {'min': '691px'},
        '690-max': {'max': '690px'},
      }
    },
  },
  plugins: [],
}
