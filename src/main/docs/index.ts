import { loginPath } from '@/main/docs/paths/login-path'
import { accountSchema } from '@/main/docs/paths/schemas/account-schema'
import { loginParamsSchema } from '@/main/docs/paths/schemas/login-params-schema'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node API - TypeScript',
    description: 'API para realizar enquetes entre Devs!',
    version: '1.0.0'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  }],
  paths: {
    '/login': loginPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema
  }
}
