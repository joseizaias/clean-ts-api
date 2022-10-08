import { SurveyResultModel } from '@/domain/models/survey-result'
import { SaveSurveyResultParams } from '@/domain/usecases/survey-result/save-survey-result'

export interface SaveSurveyResultRepository {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  save (data: SaveSurveyResultParams): Promise<SurveyResultModel>
}

/***
 *
      export interface SaveSurveyResultRepository {
        save: (data: SaveSurveyResultParams) => Promise<SurveyResultModel>
      }
 */
