import { Palette } from '@phosphor-icons/react';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          'gray': '#F8F8F8',
          'yellow': '#F8BE15',
          'red': '#EA173D',
          'green': '#6EBE49',
          'blue': '#599DDB',
          'darkBlue': '#1C3144',
          'lightBlue': '#A3CEF1',
        },
        alert: '#DC1F2E',
        info: '#FF5000',
        warning: '#F8BE15',
        success: '#6EBE49',
        body: '#4E4E4E',
        alternate: '#7C7C7C',
        muted: '#AFAFAF',
        separator: '#DDDDDD',
        light: "#EFEFEF",
        dark: "#212121",
        brow: "#2C180C"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}