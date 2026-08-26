export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#090d16',
          900: '#0f172a',
          850: '#151f34',
          800: '#1e293b',
          750: '#27354d',
          700: '#334155',
        },
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        }
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(59, 130, 246, 0.25)',
        'glow-md': '0 0 25px rgba(59, 130, 246, 0.35)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.3)',
        'panel': '0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.07)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
}