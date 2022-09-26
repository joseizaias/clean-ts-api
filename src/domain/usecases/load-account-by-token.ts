import { AccountModel } from '../models/account'

export interface LoadAccountByToken {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  load (accessToken: string, role?: string): Promise<AccountModel>
}

/****
 *

import { AccountModel } from '../models/account'

export interface LoadAccountByToken {
  add: (accessToken: string, role?: string) => Promise<AccountModel>
  // add (accessToken: string, role?: string): Promise<AccountModel>
}
*/
