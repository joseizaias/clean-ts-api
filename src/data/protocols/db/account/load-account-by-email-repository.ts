import { AccountModel } from '@/domain/models/account'

export interface LoadAccountByEmailRepository {
  loadByEmail: (email: string) => Promise<AccountModel>
}

/***
 * Uma forma diferente de escrever a interface acima:

export interface LoadAccountByEmailRepository {
  loadByEmail (email: string): Promise<AccountModel>
}

 */
