module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    db: 'readonly',
    monutor: 'readonly',
    metrics: 'readonly',
    models: 'readonly',
    Api: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
  },
};
