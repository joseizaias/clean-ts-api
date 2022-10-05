import { SurveyResultModel } from '@/domain/models/survey-result'

export type SaveSurveyResultModel = Omit<SurveyResultModel, 'id'>

export interface SaveSurveyResult {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  save (data: SaveSurveyResultModel): Promise<SurveyResultModel>
}
