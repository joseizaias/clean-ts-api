import { Collection } from 'mongodb'
import request from 'supertest'

import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'
import { app } from '../config/app'

let surveyCollection: Collection

describe('Login Routes', () => {
  beforeAll(async () => {
    // console.log(global.__MONGO_URI__)
    await MongoHelper.connect(global.__MONGO_URI__)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    surveyCollection = await MongoHelper.getCollection('surveys')
    await surveyCollection.deleteMany({})
  })

  describe('POST /surveys', () => {
    test('Should return 403 on add surveys without accessToken', async () => {
      await request(app)
        .post('/api/surveys')
        .send({
          question: 'Question',
          answers: [{
            image: 'http://image-name.com',
            answer: 'answer 1'
          }, {
            answer: 'answer 2'
          }]
        })
        .expect(403)
    })
  })
})
