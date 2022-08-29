// import { Express, Router } from 'express'
import { Router } from 'express'
// import fg from 'fast-glob'
import { readdirSync } from 'fs'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function (app) {
  const router = Router()
  app.use('/api', router)
  // fg.sync('**/src/main/routes/**routes.ts').map(async file => (await import(`../../../${file}`)).default(router))
  // readdirSync(`${__dirname}`).map(async file => console.log(file))
  readdirSync(`${__dirname}/../routes`).map(async file => {
    if (!file.includes('.test.')) {
      (await import(`../routes/${file}`)).default(router)
    }
  })
}
