/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'site-bg': '#f1f5f9',
        'site-surface': '#ffffff',
        'site-blue': '#2563eb',
        'site-purple': '#7c3aed',
        'site-green': '#059669',
        'site-text': '#0f172a',
        'site-muted': '#64748b',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

