module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'eslint-config-salesforce',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'eslint-config-prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [
      './packages/**/tsconfig.json',
      './packages/**/test/tsconfig.json',
      './tsconfig.json',
      './test/tsconfig.json',
    ],
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-import', 'eslint-plugin-jsdoc', 'unicorn'],
  rules: {
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/numeric-separators-style': 'warn',
    // turn the rule off everywhere.  Then, in overrides, turn it on for just src
    'import/no-extraneous-dependencies': ['off'],

    // Override @typescript-eslint/recommended
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        // true generally (so we get it in /test), we override it to false for src lower down
        allowNullish: true,
        allowBoolean: true,
        allowNumber: true,
      },
    ],

    // Custom @typescript-eslint
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple',
      },
    ],
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/return-await': 'error',
    // turning off the base rule is recommended by ts-eslint
    'no-return-await': 'off',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    'no-shadow': 'off',
  },
  ignorePatterns: ['*.js'],
  overrides: [
    {
      // put stricter rules you only want to apply to production code here
      files: ['src/**'],
      rules: {
        '@typescript-eslint/restrict-template-expressions': [
          'error',
          {
            allowNullish: false,
            allowBoolean: true,
            allowNumber: true,
          },
        ],
        'import/no-extraneous-dependencies': [
          'error',
          {
            includeTypes: false,
            devDependencies: false,
            peerDependencies: false,
            bundledDependencies: false,
            optionalDependencies: false,
          },
        ],
      },
    },
  ],
};
