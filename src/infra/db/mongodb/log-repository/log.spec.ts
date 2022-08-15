import { Collection } from 'mongodb'
import { MongoHelper } from '../helpers/mongo-helper'
import { LogoMongoRepository } from './log'

describe('Log Mongo Repository', () => {
  let errorCollection: Collection

  beforeAll(async () => {
    // console.log(global.__MONGO_URI__)
    await MongoHelper.connect(global.__MONGO_URI__)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    errorCollection = await MongoHelper.getCollection('errors')
    await errorCollection.deleteMany({})
  })

  test('Should create an error log on success', async () => {
    const sut = new LogoMongoRepository()
    await sut.logError('any_error')
    const count = await errorCollection.countDocuments()
    expect(count).toBe(1)
  })
})
