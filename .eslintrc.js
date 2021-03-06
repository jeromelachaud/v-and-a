module.exports = {
  root: true,
  env: {
    es6: true,
    jasmine: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: [ 'standard', 'plugin:react/recommended' ],
  plugins: [ 'react' ],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
  },
  // custom rules
  'rules': {
    'semi': ['error', 'never'],
    'brace-style': 0,
    'generator-star-spacing': 0,
    'comma-dangle': [ 'error', 'always-multiline' ],
    'semi-spacing': [ 'error', { before: false, after: true } ],
    'no-empty': [ 'error', { 'allowEmptyCatch': true } ],
    'quote-props': [ 'error', 'as-needed' ],
    'eol-last': [ 'error', 'always' ],
    'no-useless-concat': [ 'error' ],
    'no-console': [ 'warn' ],
    'no-debugger': [ 'warn' ],
    'no-var': [ 'error' ],
    'padded-blocks': [ 'error', { classes: 'always' } ],
    'prefer-template': [ 'error' ],
    'prefer-arrow-callback': [ 'error' ],
    'arrow-parens': [ 'error', 'as-needed' ],
    'space-before-function-paren': [ 'error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'ignore',
    } ],
  },
}
