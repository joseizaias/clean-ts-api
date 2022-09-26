import { LoadAccountByToken } from '../../domain/usecases/load-account-by-token'
import { AccessDeniedError } from '../errors'
import { forbidden, ok } from '../helpers/http/http-helper'
import { HttpRequest, HttpResponse, Middleware } from '../protocols'

export class AuthMiddleware implements Middleware {
  constructor (
    private readonly loadAccountByToken: LoadAccountByToken
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const accessToken = httpRequest.headers?.['x-access-token']

    if (accessToken) {
      const account = await this.loadAccountByToken.load(accessToken)

      if (account) {
        return ok({ accountId: account.id })
      }
    }

    // antes era assim, no primeiro teste, porque precisava da promise. Depois foi removido quando adicionou o "await" acima!
    // const error = forbidden(new AccessDeniedError())
    // return new Promise(resolve => resolve(error))

    return forbidden(new AccessDeniedError())

    // return new Promise(resolve => resolve(null as any))
  }
}
