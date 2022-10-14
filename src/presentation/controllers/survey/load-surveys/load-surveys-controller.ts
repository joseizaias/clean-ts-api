import { noContent, ok, serverError } from '@/presentation/helpers/http/http-helper'
import { Controller, HttpRequest, HttpResponse, LoadSurveys } from './load-survey-controller-protocols'

export class LoadSurveysController implements Controller {
  constructor (private readonly loadSurveys: LoadSurveys) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const surveys = await this.loadSurveys.load(httpRequest.accountId as string)
      return surveys.length ? ok(surveys) : noContent()
      // return null as unknown as HttpResponse
      // return Promise.resolve(null as unknown as HttpResponse)
    } catch (error) {
      return serverError(error)
    }
  }
}
