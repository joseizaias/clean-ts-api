import { AccessDeniedError } from '@/presentation/errors'
import { forbidden, ok, serverError } from '@/presentation/helpers/http/http-helper'
import { HttpRequest, HttpResponse, Middleware, LoadAccountByToken } from './auth-middleware-protocols'

export class AuthMiddleware implements Middleware {
  constructor (
    private readonly loadAccountByToken: LoadAccountByToken,
    private readonly role?: string
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const accessToken = httpRequest.headers?.['x-access-token']

      if (accessToken) {
        const account = await this.loadAccountByToken.load(accessToken, this.role)

        if (account) {
          return ok({ accountId: account.id })
        }
      }

      return forbidden(new AccessDeniedError())

      // antes era assim, no primeiro teste, porque precisava da promise. Depois foi removido quando adicionou o "await" acima!
      // const error = forbidden(new AccessDeniedError())
      // return Promise.resolve(error)

      // return Promise.resolve(null as unknown as HttpResponse)
      // return Promise.resolve(null as any)
    } catch (error) {
      return serverError(error)
    }
  }
}
