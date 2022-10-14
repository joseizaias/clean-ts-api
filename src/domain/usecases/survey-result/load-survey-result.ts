import { SurveyResultModel } from '@/domain/models/survey-result'

export interface LoadSurveyResult {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  load (surveyId: string, accountId: string): Promise<SurveyResultModel>
}
