import { AccountModel } from '@/domain/models/account'

export type AddAccountParams = Omit<AccountModel, 'id'>
// export type AddAccountParams = {
//   name: string
//   email: string
//   password: string
// }

export interface AddAccount {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  add (account: AddAccountParams): Promise<AccountModel>
}
