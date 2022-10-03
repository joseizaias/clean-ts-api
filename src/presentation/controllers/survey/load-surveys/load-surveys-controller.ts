import { ok, serverError } from '@/presentation/helpers/http/http-helper'
import { Controller, HttpRequest, HttpResponse, LoadSurveys } from './load-survey-controller-protocols'

export class LoadSurveysController implements Controller {
  constructor (private readonly loadSurveys: LoadSurveys) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const surveys = await this.loadSurveys.load()
      return ok(surveys)
      // return null as unknown as HttpResponse
      // return new Promise(resolve => resolve(null as unknown as HttpResponse))
    } catch (error) {
      return serverError(error)
    }
  }
}
