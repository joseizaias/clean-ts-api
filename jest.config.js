module.exports = {
  preset: 'ts-jest', ///  '@shelf/jest-mongodb',
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  // testEnvironment: 'node',  /// removi devido ao @shelf/jest-mongodb -> https://github.com/shelfio/jest-mongodb
  transform: {
    '.+\\.ts$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node']
}

// testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
// jest.config.js
