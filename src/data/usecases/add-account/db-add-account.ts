import { Hasher, AccountModel, AddAccount, AddAccountModel, AddAccountRepository, LoadAccountByEmailRepository } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly hasher: Hasher,
    private readonly addAccountRepository: AddAccountRepository,
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository
  ) {}

  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const account = await this.loadAccountByEmailRepository.loadByEmail(accountData.email)

    if (!account) {
      const hashedPassword = await this.hasher.hash(accountData.password)
      const newAccount = await this.addAccountRepository.add(Object.assign({}, accountData, { password: hashedPassword }))
      console.log('newAccount')
      console.log(newAccount)
      return newAccount
    }

    // console.log(makeFakeAccountModelNull())
    return account
    // return makeFakeAccountModelNull()

    // return new Promise(resolve => resolve(fakeResult))
  }
}
