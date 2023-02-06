/** @see https://github.com/withastro/prettier-plugin-astro#pnpm-support-1 */

module.exports = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
