import { Hasher, AccountModel, AddAccount, AddAccountParams, AddAccountRepository, LoadAccountByEmailRepository } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly hasher: Hasher,
    private readonly addAccountRepository: AddAccountRepository,
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository
  ) {}

  async add (accountData: AddAccountParams): Promise<AccountModel> {
    const account = await this.loadAccountByEmailRepository.loadByEmail(accountData.email)
    let returnedValue = null as unknown as AccountModel

    if (!account) {
      const hashedPassword = await this.hasher.hash(accountData.password)
      returnedValue = await this.addAccountRepository.add(Object.assign({}, accountData, { password: hashedPassword }))
    }

    return returnedValue
    // return new Promise(resolve => resolve(fakeResult))
  }
}
