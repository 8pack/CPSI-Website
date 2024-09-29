/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#808080',
        'borders': {
          '': 'rgba(102, 102, 102, 0.56)',
          '40': 'rgba(102, 102, 102, 0.40)',
        },
        'cpsi' : {
          'orange': '#F7A284',
          'orange-transparent': 'rgba(241, 90, 36, 0.56)',
          'blue': '#52BBE8',
          'blue-transparent': 'rgba(41, 171, 226, 0.56)',
          'red': '#CD5155',
          'red-transparent': 'rgba(193, 39, 45, 0.56)',
        }
      }
    },
  },
  plugins: [],
}

