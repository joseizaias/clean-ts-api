import { SurveyResultModel } from '@/domain/models/survey-result'

export type SaveSurveyResultParams = Omit<SurveyResultModel, 'id'>

export interface SaveSurveyResult {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  save (data: SaveSurveyResultParams): Promise<SurveyResultModel>
}
