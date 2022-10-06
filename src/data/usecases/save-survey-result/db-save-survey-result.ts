import { SaveSurveyResult, SaveSurveyResultModel, SaveSurveyResultRepository, SurveyResultModel } from './db-save-survey-result-protocols'

export class DbSaveSurveyResult implements SaveSurveyResult {
  constructor (private readonly saveSurverResultRepository: SaveSurveyResultRepository) {}

  async save (data: SaveSurveyResultModel): Promise<SurveyResultModel> {
    await this.saveSurverResultRepository.save(data)
    return null as unknown as SurveyResultModel
  }
}
