import { AccountModel } from '@/domain/models/account'

export type AddAccountModel = Omit<AccountModel, 'id'>
// export type AddAccountModel = {
//   name: string
//   email: string
//   password: string
// }

export interface AddAccount {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  add (account: AddAccountModel): Promise<AccountModel>
}