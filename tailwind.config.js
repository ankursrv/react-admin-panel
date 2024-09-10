/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gray-dark': 'rgba(54, 55, 64, 1)',
        'gray-light-primary': '#A4A6B3',
        'gray-light-secondary': 'rgba(159, 162, 180, 1)',
        'gray-tertary': '#9FA2B4',
        'gray-fourth': 'rgba(138, 146, 166, 1)',
        'black-primary': 'rgba(35, 45, 66, 1)',
        'black-secondary': 'rgba(16, 24, 40, 1)',
        'blue-light': 'rgba(221, 226, 255, 1)',
        'blue-light-primary': 'rgba(245, 245, 249, 1)',
        'border-primary': 'rgba(209, 209, 209, 1)',
        'border-secondary': 'rgba(207, 207, 207, 1)',
        'border-tertary': 'rgba(208, 213, 221, 1)',
        'shadow-primary': '0px 10px 30px 0px rgba(17, 38, 146, 0.05)',
        'shadow-seconday': '0px 1px 2px 0px #1018280D',
      },
    },
  },
  plugins: [],
}


