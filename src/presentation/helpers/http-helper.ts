import { ServerError } from '../errors/server-error'
import { HttpResponse } from '../protocols/http'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error // new MissingParamError('email')
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})