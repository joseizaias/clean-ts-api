import { SurveyModel } from '@/domain/models/survey'

export interface LoadSurveyByIdRepository {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  loadById (id: string): Promise<SurveyModel>
}

/*****
 *
    export interface LoadSurveyByIdRepository {
      loadById: (id: string) => Promise<SurveyModel>
    }
 *
 */
