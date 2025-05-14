module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: ['plugin:@typescript-eslint/recommended'],
    rules: {
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': 'error'
    }
  };
  