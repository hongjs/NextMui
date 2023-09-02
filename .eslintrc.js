const config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
    sourceType: 'module',
    tsconfigRootDir: __dirname,

    project: './tsconfig.json',
  },
  extends: [
    'next/core-web-vitals',
    'prettier',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ],
  rules: {
    camelcase: 'error',
    'react/jsx-pascal-case': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    // "@typescript-eslint/no-confusing-void-expression": "warn",
    // "@typescript-eslint/no-non-null-assertion": "warn",
    // "@typescript-eslint/no-unnecessary-condition": "warn",
    // "@typescript-eslint/no-explicit-any": "warn",
    // "@typescript-eslint/no-unsafe-argument": "warn",
    // "@typescript-eslint/no-unsafe-assignment": "warn",
    // "@typescript-eslint/no-unsafe-call": "warn",
    // "@typescript-eslint/no-unsafe-enum-comparison": "warn",
    // "@typescript-eslint/no-unsafe-member-access": "warn",
    // "@typescript-eslint/no-unsafe-return": "warn",
    // "@typescript-eslint/no-empty-interface": "warn",
    // "@typescript-eslint/no-floating-promises": "warn",
    // "@typescript-eslint/no-unused-vars": "warn",
    // "@typescript-eslint/require-await": "warn",
    // "@typescript-eslint/ban-types": "warn",
    // "@typescript-eslint/consistent-type-definitions": "warn",
    // "@typescript-eslint/prefer-nullish-coalescing": "warn",
    // "@typescript-eslint/array-type": "warn",
    // "@typescript-eslint/non-nullable-type-assertion-style": "warn"
  },
};

module.exports = config;
