import { AccountModel } from '../../../../domain/models/account'
import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { MongoHelper } from '../helpers/mongo-helper'

// const accountModelNullObject: AccountModel = {
//   id: '',
//   name: '',
//   email: '',
//   password: ''
// }

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    const account = result.ops[0] // Soh nas versões anteriores a 4 do mongo, ou seja, soh no mongo v3 para trás.
    const { _id, ...accountWithoutId } = account
    return Object.assign({}, accountWithoutId, { id: _id })
    // return new Promise(resolve => resolve(accountModelNullObject)) // útil para retornar a promise enquanto não finaliza o código.
  }
}
