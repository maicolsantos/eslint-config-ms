module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'standard',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'jsx-a11y',
    '@typescript-eslint'
  ],
  rules: {
    'prettier/prettier': ["error", {
      'printWidth': 80,
      'tabWidth': 2,
      'singleQuote': true,
      'trailingComma': 'all',
      'arrowParens': 'always',
      'semi': false,
      'endOfLine': 'auto',
      'bracketSpacing': true,
      'bracketSameLine': false,
    }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    "no-console": [ 1, { allow: [ "warn", "error" ] }],
    "prefer-const": "error",
    "comma-dangle": [ "error", "always-multiline" ],
    indent: [ "error", 2, { SwitchCase: 1 }],
    "no-empty-function": "error",
    "newline-before-return": "error",
    "max-len": [ "error", { code: 120, ignorePattern: "^import\\W.*" }],
    "no-multiple-empty-lines": [ "error", { max: 1, maxBOF: 0, maxEOF: 0 }],
    "no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
    "import/order": 0,
    semi: [ "error", "never" ],
    quotes: ["error", "single"],
    "object-curly-spacing": [ "error", "always" ],
    "object-curly-newline": [ "error", {
      multiline: true,
      consistent: true,
      minProperties: 4,
    }],
    "array-bracket-spacing": [ "error", "always", {
      objectsInArrays: false,
      arraysInArrays: false,
    }],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  }
}
