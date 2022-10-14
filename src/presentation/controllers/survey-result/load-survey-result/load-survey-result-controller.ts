import { InvalidParamError } from '@/presentation/errors'
import { forbidden, ok, serverError } from '@/presentation/helpers/http/http-helper'
import { Controller, HttpRequest, HttpResponse, LoadSurveyById, LoadSurveyResult } from './load-survey-result-controller-protocols'

export class LoadSurveyResultController implements Controller {
  constructor (
    private readonly loadSurveyById: LoadSurveyById,
    private readonly loadSurveyResult: LoadSurveyResult
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { surveyId } = httpRequest.params
      const survey = await this.loadSurveyById.loadById(surveyId)

      if (!survey) {
        return forbidden(new InvalidParamError('surveyId'))
      }

      const loadSurveyResult = await this.loadSurveyResult.load(surveyId, httpRequest.accountId as string)
      return ok(loadSurveyResult)
      // return null as unknown as HttpResponse
    } catch (error) {
      return serverError(error)
    }
  }
}
