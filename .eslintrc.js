const config = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    ecmaVersion: 12,
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'off',
    'prefer-const': 'warn',
    'no-unused-vars': 'error',
    'no-duplicate-case': 'error',
  },
}

module.exports = config
