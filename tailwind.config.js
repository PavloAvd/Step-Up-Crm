/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./public/index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage:{
            'greyGradient': 'linear-gradient(180deg, #141E30 10%, #28416F 100%)'
        },
        colors:{

        }
    },
  },
  plugins: [],
}
