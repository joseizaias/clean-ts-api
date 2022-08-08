// import { Express } from 'express'
import { bodyParser } from '../middlewares/body-parser'
import { cors } from '../middlewares/cors'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function (app) {
  app.use(bodyParser)
  app.use(cors)
}

// A ideia é usar a forma abaixo, mas, está dando erro de sintax
// export default function (app: Express): void {
//   app.use(bodyParser)
// }
