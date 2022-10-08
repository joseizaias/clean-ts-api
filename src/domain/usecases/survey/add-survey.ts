import { SurveyModel } from '@/domain/models/survey'

export type AddSurveyParams = Omit<SurveyModel, 'id'>
// export type AddSurveyParams = {
//   question: string
//   answers: SurveyAnswerModel[]
//   date: Date
// }

export interface AddSurvey {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  add (data: AddSurveyParams): Promise<void>
}
