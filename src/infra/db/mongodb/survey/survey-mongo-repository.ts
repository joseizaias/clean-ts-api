import { AddSurveyModel, AddSurveyRepository } from '../../../../data/usecases/add-survey/db-add-survey-protocols'
import { MongoHelper } from '../helpers/mongo-helper'

export class SurveyMongoRepository implements AddSurveyRepository {
  async add (surveyData: AddSurveyModel): Promise<void> {
    const surveyCollection = await MongoHelper.getCollection('surveys')
    await surveyCollection.insertOne(surveyData)
    // const result = await surveyCollection.insertOne(surveyData)
    // return new Promise(resolve => resolve()) // returna uma promise jah que o metodo eh async e neste caso, retorna vazio por ser void.
  }
}
