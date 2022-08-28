// import { Router } from 'express'
import { makeSignUpController } from '../factories/signup/signup-factory'
import { adaptRoute } from '../adapters/express-route-adapter'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default (router) => {
  router.post('/signup', adaptRoute(makeSignUpController()))
}

// Deveria estar assim, com os parâmtros e seus tipos, mas, quando coloco o tipo, recebo do jest o erro:
//        SyntaxError: C:\Users\Pedro\TDD\clean-node-api\src\main\routes\signup-routes.ts: Unexpected token, expected "," (3:22)
// export default (router: Router): void => {
//   router.post('/signup', (req, res) => {
//     res.json({ ok: 'ok' })
//   })
// }
