import { AddAccountParams } from '@/domain/usecases/account/add-account'
import { AccountModel } from '@/domain/models/account'

export interface AddAccountRepository {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  add (accountData: AddAccountParams): Promise<AccountModel>
}
