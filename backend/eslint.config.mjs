import js from '@eslint/js';
import globals from 'globals';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  // 1. Globale Ignorier-Liste
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', 'users.sql'],
  },

  // 2. Grundkonfiguration für deine JS-Dateien
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module', // Ändere dies zu 'commonjs', falls du require() nutzt
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },

  // 3. Prettier-Integration (WICHTIG: Muss am Ende stehen)
  // Das schaltet alle Regeln aus, die Prettier stören könnten
  prettierRecommended,
];