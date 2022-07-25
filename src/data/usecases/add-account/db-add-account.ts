import { Encrypter, AccountModel, AddAccount, AddAccountModel  } from './db-add-account-protocols'

const fakeResult: AccountModel = {
  id: '',
  name: '',
  email: '',
  password: ''
}

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter

  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add (account: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password)
    return new Promise(resolve => resolve(fakeResult))
  }
}
