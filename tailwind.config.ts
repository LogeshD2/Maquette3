  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          neutral: {
            black: '#263238',
            d_grey: '#4D4D4D',
            grey: '#717171',
            l_grey: '#89939E',
            grey_blue: '#ABBED1',
            silver: '##F5F7FA',
            white: '#FFFFFF' 
          },
          primary: '#28CB8B',
          secondary: '#263238',
          info: '#2194f3',
          colorShade: {
            shade1: '#43A046',
            shade2: '#388E3B',
            shade3: '#237D31',
            shade4: '#1B5E1F',
            shade5: '#103E13'
          },
          colorTint: {
            tint1: '#66BB69',
            tint2: '#81C784',
            tint3: '#A5D6A7',
            tint4: '#C8E6C9',
            tint5: '#C8E6C9'
          },
          action: {
            warning: '#FBC02D',
            error: '#E53835',
            success: '#2E7D31'
          }
        },
        fontSize: {
          'headline-1': ['64px', '76px'],
          'headline-2': ['36px', '44px'],
          'headline-3': ['28px', '36px'],
          'headline-4': ['20px', '28px'],
          'body-1': ['18px', '28px'],
          'body-2': ['16px', '24px'],
          'body-3': ['14px', '20px'],
          'body-4': ['12px', '16px'], 
        },
        fontWeight: {
          'regular': 400, 
          'medium': 600, 
        },
      },
    },
    darkMode: 'class',
    plugins: [],
  }

