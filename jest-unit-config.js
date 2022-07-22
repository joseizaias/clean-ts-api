const { ModuleResolutionKind } = require('typescript')
const config = require('./jest.config')
config.testMatch = ['**/*.spec.ts']
ModuleResolutionKind.exports = config
