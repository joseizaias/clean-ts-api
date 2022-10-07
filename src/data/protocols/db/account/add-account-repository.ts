import { AddAccountModel } from '@/domain/usecases/account/add-account'
import { AccountModel } from '@/domain/models/account'

export interface AddAccountRepository {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  add (accountData: AddAccountModel): Promise<AccountModel>
}
