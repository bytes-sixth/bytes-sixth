/**
 * @type {import('eslint').Linter.Config} config
 */
const eslintConfig = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.jsx'] }],

    // 当启用新的 JSX 转换时,可以关闭下面两条规则
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    'react/prop-types': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
  },
  overrides: [],
  ignorePatterns: ['**/node_modules/**', 'dist', 'lib', '**/__snapshots__/**'],
}

module.exports = eslintConfig
