/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        sm: '0px 0px 1px #b0b0b0'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: []
}
