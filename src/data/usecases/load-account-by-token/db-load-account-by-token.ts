import { LoadAccountByTokenRepository } from '@/data/protocols/db/account/load-account-by-token-repository'
import { Decrypter } from '@/data/protocols/criptography/decrypter'
import { LoadAccountByToken } from '@/domain/usecases/load-account-by-token'
import { AccountModel } from '@/domain/models/account'

export class DbLoadAccountByToken implements LoadAccountByToken {
  constructor (
    private readonly decrypter: Decrypter,
    private readonly loadAccountByTokenRepository: LoadAccountByTokenRepository
  ) {}

  async load (accessToken: string, role?: string | undefined): Promise<AccountModel> {
    const token = await this.decrypter.decrypt(accessToken)

    if (token) {
      const account = await this.loadAccountByTokenRepository.loadByToken(accessToken, role)

      if (account) {
        return account
      }
    }

    return null as unknown as AccountModel
    // return null as any
    // return new Promise(resolve => resolve(null as any))
  }
}
