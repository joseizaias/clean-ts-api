import { AddSurveyModel } from '@/domain/usecases/add-survey'

export interface AddSurveyRepository {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  add (surveyData: AddSurveyModel): Promise<void>
}
