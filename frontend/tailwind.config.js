module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height'
      }
    }
  }
}
