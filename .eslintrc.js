module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    // Path to every tsconfig files for linter to work
    project: ['./projects/*/tsconfig.json'],
    impliedStrict: true,
    ecmaVersion: 2019,
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'promise',
    'graphql',
    'import',
    'react',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:promise/recommended',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-console': 'warn',
    strict: 'error',
    'react/button-has-type': 0,
    'react/destructuring-assignment': 0, // Don't force destructuring
    'react/require-default-props': [
      0,
      { forbidDefaultForRequired: false, ignoreFunctionalComponents: true },
    ], // No error while defining default props in React.FC
    'spaced-comment': 0,
    'no-use-before-define': [0],
    'implicit-arrow-linebreak': [0, { 'arrow-body-style': 'always' }],
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'all',
      },
    ],
    'react-hooks/exhaustive-deps': 0,
    'react/jsx-props-no-spreading': 'off',
    'react/no-unused-prop-types': 1,
    '@typescript-eslint/no-explicit-any': [
      'warn',
      {
        ignoreRestArgs: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'none',
      },
    ],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/quotes': [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
  },
  overrides: [
    // Override some TypeScript rules just for .js files
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
