import express from 'express'

import setupMiddlewares from './middlewares'
import setupRoutes from './routes'
import setupSwagger from './config-swagger'

const app = express()
setupSwagger(app)
setupMiddlewares(app)
setupRoutes(app)

export default app

/**
 * outra forma de criar o app.ts:
 *
import express from 'express'
import setupMiddlewares from './middlewares'
import setupRoutes from './routes'

export const app = express()
setupMiddlewares(app)
setupRoutes(app)
 *
 * observação:
 *  ao importar o app nos módulos de testes devemos usar:
 *    => import { app } from '@/main/config/app'
 *
 *  como está configurado, usamos:
 *    => import app from '@/main/config/app'
 */
