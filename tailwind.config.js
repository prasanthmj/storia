module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./content/**/*.html"
  ],
  theme: {
      extend: {
        colors: {
          primary: '#3498db',
          secondary: '#2ecc71',
          background: '#f5f5f5',
          text: '#333333',
          header: '#2c3e50',
        },
      },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}