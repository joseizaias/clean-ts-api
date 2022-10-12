import { LoadSurveyResultRepository, SaveSurveyResult, SaveSurveyResultParams, SaveSurveyResultRepository, SurveyResultModel } from './db-save-survey-result-protocols'

export class DbSaveSurveyResult implements SaveSurveyResult {
  constructor (
    private readonly saveSurverResultRepository: SaveSurveyResultRepository,
    private readonly loadSurverResultRepository: LoadSurveyResultRepository
  ) {}

  async save (data: SaveSurveyResultParams): Promise<SurveyResultModel> {
    await this.saveSurverResultRepository.save(data)
    const surveyResult = await this.loadSurverResultRepository.loadBySurveyId(data.surveyId)
    return surveyResult
    // return null as unknown as SurveyResultModel
  }
}
