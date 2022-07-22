const { ModuleResolutionKind } = require('typescript')
const config = require('./jest.config')
config.testMatch = ['**/*.test.ts']
ModuleResolutionKind.exports = config
