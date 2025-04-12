export default {
  '*.{js,ts,jsx,tsx}': ['yarn lint:fix', 'yarn format'],
  '*.{json,css,md}': ['yarn format'],
}
