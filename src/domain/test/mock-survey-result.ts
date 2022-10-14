// import { faker } from '@faker-js/faker'

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
  surveyId: 'any_id',
  question: 'any_question',
  answers: [{
    answer: 'any_answer',
    count: 0,
    percent: 0,
    isCurrentAccountAnswer: false
  },{
    answer: 'other_anwser',
    image: 'any_image',
    count: 0,
    percent: 0,
    isCurrentAccountAnswer: false
  }],
  date: new Date()
})

export const mockEmptySurveyResultModel = (): SurveyResultModel => ({
  surveyId: 'any_id',
  question: 'any_question',
  answers: [{
    answer: 'any_answer',
    count: 0,
    percent: 0,
    isCurrentAccountAnswer: false
  },{
    answer: 'other_anwser',
    image: 'any_image',
    count: 0,
    percent: 0,
    isCurrentAccountAnswer: false
  }],
  date: new Date()
})
