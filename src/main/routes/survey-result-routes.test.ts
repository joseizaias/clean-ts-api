import request from 'supertest'

import { app } from '@/main/config/app'

describe('Login Routes', () => {
  describe('PUT /surveys/:surveyId/result', () => {
    test('Should return 403 on save surveys result without accessToken', async () => {
      await request(app)
        .put('/api/surveys/any_idSurvey/results')
        .send({
          answer: 'any_answer'
        })
        .expect(403)
    })
  })
})
