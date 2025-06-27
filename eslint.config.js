import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier'; // ✅ Prettier config
import eslintPluginPrettier from 'eslint-plugin-prettier'; // ✅ Prettier plugin

export default tseslint.config(
  { ignores: ['dist'] },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prettier/prettier': 'error', // ✅ Enforce Prettier formatting
    },
  },
  {
    name: 'prettier-config',
    plugins: { prettier: eslintPluginPrettier },
    rules: prettier.rules, // ✅ Apply Prettier config to disable conflicting rules
  }
);
