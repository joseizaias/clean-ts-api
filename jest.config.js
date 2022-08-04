module.exports = {
  preset: '@shelf/jest-mongodb',
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  // testEnvironment: 'node',  /// removi devido ao @shelf/jest-mongodb -> https://github.com/shelfio/jest-mongodb
  transform: {
    '.+\\.ts$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  }
}
