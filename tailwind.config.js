module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./content/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        background: 'var(--color-background)',
        text: 'var(--color-text)',
        'text-light': 'var(--color-text-light)',
        'navbar-bg': 'var(--color-navbar-bg)',
        'navbar-text': 'var(--color-navbar-text)',
      },
      fontFamily: {
        'sans': ['var(--font-sans)'],
        'serif': ['var(--font-serif)'],
      },
    },
  },
  plugins: [],
}