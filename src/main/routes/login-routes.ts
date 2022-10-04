// import { Router } from 'express'
import { makeSignUpController } from '@/main/factories/controllers/login/signup/signup-controller-factory'
import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { makeLoginController } from '@/main/factories/controllers/login/login/login-controller-factory'

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
