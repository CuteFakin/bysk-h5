module.exports = {
  root: true,
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/standard'
  ],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 12,
    parser: 'babel-eslint',
    sourceType: 'module'
  },

  plugins: [
    'vue'
  ],
  // 以下是内部前端团队eslint规范
  rules: {
    camelcase: 2,
    indent: [
      'error',
      2
    ],
    semi: [
      'error',
      'never'
    ],
    'new-parens': 2,
    'init-declarations': 2,
    eqeqeq: 2,
    'no-use-before-define': 2,
    'no-undef-init': 2,
    'no-undef': 2,
    'no-sparse-arrays': 2,
    'no-unreachable': 2,
    'no-unused-expressions': 2,
    'no-void': 2,
    'no-var': 2,
    'array-bracket-spacing': [
      2,
      'never'
    ],
    'block-scoped-var': 0,
    'comma-dangle': [
      2,
      'never'
    ],
    'comma-style': [
      2,
      'last'
    ],
    'consistent-this': [
      2,
      'context'
    ],
    quotes: [
      2,
      'single'
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/html-self-closing': ['error', {
      html: {
        void: 'never',
        normal: 'any',
        component: 'any'
      },
      svg: 'always',
      math: 'always'
    }]
  }

}
