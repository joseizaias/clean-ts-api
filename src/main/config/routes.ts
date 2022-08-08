// import { Express, Router } from 'express'
import { Router } from 'express'
import fg from 'fast-glob'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function (app) {
  const router = Router()
  app.use('/api', router)
  fg.sync('**/src/main/routes/**routes.ts').map(async file => (await import(`../../../${file}`)).default(router))
}
