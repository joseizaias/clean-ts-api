import { Decrypter } from '../../../data/protocols/criptography/decrypter'
import jwt from 'jsonwebtoken'
import { Encrypter } from '../../../data/protocols/criptography/encrypter'

export class JwtAdapter implements Encrypter, Decrypter {
  constructor (private readonly secret: string) {}

  async encrypt (value: string): Promise<string> {
    const accessToken = await jwt.sign({ id: value }, this.secret)
    return accessToken
    // return new Promise(resolve => resolve(''))
  }

  async decrypt (value: string): Promise<string> {
    await jwt.verify(value, this.secret)
    return null as any
    // return new Promise(resolve => resolve(null as any))
  }
}
