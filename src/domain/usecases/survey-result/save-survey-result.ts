import { SurveyResultModel } from '@/domain/models/survey-result'

export type SaveSurveyResultParams = {
  surveyId: string
  accountId: string
  answer: string
  date: Date
}

export interface SaveSurveyResult {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  save (data: SaveSurveyResultParams): Promise<SurveyResultModel>
}
