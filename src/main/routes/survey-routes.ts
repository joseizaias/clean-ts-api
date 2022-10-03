import { Router } from 'express'
import { makeAddSurveyController } from '@/main/factories/controllers/survey/add-survey/add-survey-controller-factory'
import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { makeAuthMiddleware } from '@/main/factories/middlewares/auth-middleware-factory'
import { adaptMiddleware } from '@/main/adapters/express-middleware-adapter'
import { makeLoadSurveysController } from '@/main/factories/controllers/survey/load-surveys/load-surveys-controller-factory'

export default (router: Router): void => {
  const adminAuth = adaptMiddleware(makeAuthMiddleware('admin'))
  const auth = adaptMiddleware(makeAuthMiddleware())
  router.post('/surveys', adminAuth, adaptRoute(makeAddSurveyController()))
  router.get('/surveys', auth, adaptRoute(makeLoadSurveysController()))
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// export default (router) => {
//   router.post('/signup', adaptRoute(makeSignUpController()))
//   router.post('/login', adaptRoute(makeLoginController()))
// }

// Deveria estar assim, com os parâmtros e seus tipos, mas, quando coloco o tipo, recebo do jest o erro:
//        SyntaxError: C:\Users\Pedro\TDD\clean-node-api\src\main\routes\signup-routes.ts: Unexpected token, expected "," (3:22)
// export default (router: Router): void => {
//   router.post('/signup', (req, res) => {
//     res.json({ ok: 'ok' })
//   })
// }
