// import { Router } from 'express'
import { makeSignUpController } from '../factories/controllers/signup/signup-controller-factory'
import { adaptRoute } from '../adapters/express/express-route-adapter'
import { makeLoginController } from '../factories/controllers/login/login-controller-factory'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default (router) => {
  router.post('/signup', adaptRoute(makeSignUpController()))
  router.post('/login', adaptRoute(makeLoginController()))
}

// Deveria estar assim, com os parâmtros e seus tipos, mas, quando coloco o tipo, recebo do jest o erro:
//        SyntaxError: C:\Users\Pedro\TDD\clean-node-api\src\main\routes\signup-routes.ts: Unexpected token, expected "," (3:22)
// export default (router: Router): void => {
//   router.post('/signup', (req, res) => {
//     res.json({ ok: 'ok' })
//   })
// }
