// import { Express, Router } from 'express'
import { Express, Router } from 'express'
// import fg from 'fast-glob'
import { readdirSync } from 'fs'
import path from 'path'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  readdirSync(path.join(`${__dirname}`, '/../routes')).map(async file => {
    if (!file.includes('.test.') && !file.endsWith('.map')) {
      (await import(`../routes/${file}`)).default(router)
    }
  })
}
