module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        SRMImage: "url('/public/SRMRoom.png')",
        DCBG: "url('/public/page1.png')",
      },
    },
  },
  plugins: [],
}
