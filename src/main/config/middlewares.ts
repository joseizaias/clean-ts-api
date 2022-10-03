// import { Express } from 'express'
import { cors, bodyParser, contentType } from '@/main/middlewares'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function (app) {
  app.use(bodyParser)
  app.use(cors)
  app.use(contentType)
}

// A ideia é usar a forma abaixo, mas, está dando erro de sintax
// export default function (app: Express): void {
//   app.use(bodyParser)
// }
