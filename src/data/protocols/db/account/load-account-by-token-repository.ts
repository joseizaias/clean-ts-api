import { AccountModel } from '@/domain/models/account'

export interface LoadAccountByTokenRepository {
  loadByToken: (token: string, role?: string) => Promise<AccountModel>
}

/***
 * Uma forma diferente de escrever a interface acima:

export interface LoadAccountByEmailRepository {
  loadByToken (token: string, role?: string): Promise<AccountModel>
}

 */
