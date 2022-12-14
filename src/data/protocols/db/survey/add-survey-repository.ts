import { AddSurveyParams } from '@/domain/usecases/survey/add-survey'

export interface AddSurveyRepository {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  add (surveyData: AddSurveyParams): Promise<void>
}
