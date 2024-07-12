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
        fontFamily: {
          'sans': ['Open Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
          'serif': ['Merriweather', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        },
      },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
