import { Collection } from 'mongodb'
import { hash } from 'bcrypt'
import request from 'supertest'

import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'
import app from '@/main/config/app'

let accountCollection: Collection

describe('Login Routes', () => {
  beforeAll(async () => {
    // console.log(global.__MONGO_URI__)
    await MongoHelper.connect(global.__MONGO_URI__)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /signup', () => {
    test('Should return 200 on signup', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: 'jose izaias',
          email: 'joseizaias@gmail.com',
          password: '1234',
          passwordConfirmation: '1234'
        })
        .expect(200)
    })
  })

  describe('POST /login', () => {
    test('Should return 200 on login', async () => {
      const salt = 12
      const password = await hash('1234', salt)
      await accountCollection.insertOne({
        name: 'jose izaias',
        email: 'joseizaias@gmail.com',
        password
      })
      await request(app)
        .post('/api/login')
        .send({
          email: 'joseizaias@gmail.com',
          password: '1234'
        })
        .expect(200)
    })

    test('Should return 401 on login', async () => {
      await request(app)
        .post('/api/login')
        .send({
          email: 'joseizaias@gmail.com',
          password: '1234'
        })
        .expect(401)
    })
  })
})
