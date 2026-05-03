/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Brand colours come from CSS custom properties injected by BaseLayout
      // from config.json at build time. This keeps Tailwind utilities
      // (`bg-primary`, `text-accent`, etc.) wired to whatever the client's
      // colours are without rebuilding Tailwind.
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        dark: 'var(--color-dark)',
        light: 'var(--color-light)',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      borderRadius: {
        brand: 'var(--radius)',
      },
    },
  },
  plugins: [],
};
