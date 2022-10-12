import { SurveyResultModel } from '@/domain/models/survey-result'
import { SaveSurveyResultParams } from '@/domain/usecases/survey-result/save-survey-result'

export const mockSaveSurveyResultParams = (): SaveSurveyResultParams => ({
  accountId: 'any_accountId',
  surveyId: 'any_surveyId',
  answer: 'any_answer',
  date: new Date()
})

// export const mockSurveyResultModel = (): SurveyResultModel => Object.assign({}, mockSaveSurveyResultParams(), { id: 'any_id' })
export const mockSurveyResultModel = (): SurveyResultModel => ({
  surveyId: 'any_surveyId',
  question: 'any_question',
  answers: [{
    answer: 'any_anwser',
    count: 1,
    percent: 50
  },{
    answer: 'other_anwser',
    image: 'any_image',
    count: 10,
    percent: 80
  }],
  date: new Date()
})
