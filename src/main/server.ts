// require('module-alias/register')
import 'module-alias/register'
import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'
import env from './config/env'

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    const app = (await import('./config/app')).default
    // const app = (await import('./config/app')).app     // quando usando o => export const app = express()
    // const app = (await import('./config/app')).default // quando usando o => export default em ./config/app
    app.listen(env.port, () => {
      console.log(`The server is UP on port ${env.port}!`)
    })
  })
  .catch(console.error)
