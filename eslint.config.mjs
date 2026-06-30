import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
  // Use recommended ESLint rules
  eslint.configs.recommended,

  // Turn off rules that conflict with Prettier (must be last)
  eslintConfigPrettier,

  {
    // Ignore files and directories
    ignores: ['**/node_modules/', '**/dist/', '**/build/'],
  },

  // Add this new block just for your server files!
  {
    files: ['apps/server/**/*.js'], // targets your backend files
    languageOptions: {
      globals: {
        ...globals.node, // adds process, require, module, etc.
      },
    },
  },

  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
];
