import { SurveyModel } from '@/domain/models/survey'

export interface LoadSurveysRepository {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  loadAll (): Promise<SurveyModel[]>
}
