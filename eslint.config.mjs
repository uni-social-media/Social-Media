import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  // Use recommended ESLint rules
  eslint.configs.recommended,

  // Turn off rules that conflict with Prettier (must be last)
  eslintConfigPrettier,

  {
    // Ignore files and directories
    ignores: ['**/node_modules/', '**/dist/', '**/build/'],
  },
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
];
