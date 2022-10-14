import { SurveyResultModel } from '@/domain/models/survey-result'

export interface LoadSurveyResultRepository {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  loadBySurveyId (surveyId: string, accountId: string): Promise<SurveyResultModel>
}
