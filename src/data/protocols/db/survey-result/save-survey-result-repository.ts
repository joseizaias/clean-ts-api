import { SurveyResultModel } from '@/domain/models/survey-result'
import { SaveSurveyResultModel } from '@/domain/usecases/survey-result/save-survey-result'

export interface SaveSurveyResultRepository {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  save (data: SaveSurveyResultModel): Promise<SurveyResultModel>
}

/***
 *
      export interface SaveSurveyResultRepository {
        save: (data: SaveSurveyResultModel) => Promise<SurveyResultModel>
      }
 */
