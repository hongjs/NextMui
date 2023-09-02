const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/app/(.*)$': '<rootDir>/src/app/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/configs/(.*)$': '<rootDir>/src/configs/$1',
    '^@/contexts/(.*)$': '<rootDir>/src/contexts/$1',
    '^@/hooks/?(.*)$': '<rootDir>/src/hooks/$1',
    '^@/middlewares/?(.*)$': '<rootDir>/src/middlewares/$1',
    '^@/reducers/?(.*)$': '<rootDir>/src/reducers/$1',
    '^@/theme/?(.*)$': '<rootDir>/src/theme/$1',
    '^@/types/?(.*)$': '<rootDir>/src/types/$1',
  },
  moduleDirectories: ['node_modules', '<rootDir>'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/', '<rootDir>/.vscode', '<rootDir>/public'],
};
module.exports = createJestConfig(customJestConfig);
