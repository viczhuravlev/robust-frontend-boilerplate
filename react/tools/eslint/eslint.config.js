const path = require('path');

const { rootPath } = require('../config/paths');

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  parserOptions: {
    project: path.resolve(rootPath, 'tsconfig.json'),
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    '@typescript-eslint/no-unused-vars': [2, { args: 'after-used', argsIgnorePattern: '^_' }],
    'no-unused-vars': [2, { args: 'after-used', argsIgnorePattern: '^_' }],
    'react/jsx-one-expression-per-line': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/indent': 'off',
    'react/no-array-index-key': 'warn',
    'react/prop-types': 'off',
    'no-console': 'error',
  },
};
