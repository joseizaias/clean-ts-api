import jwt from 'jsonwebtoken'

import { Decrypter } from '@/data/protocols/criptography/decrypter'
import { Encrypter } from '@/data/protocols/criptography/encrypter'

export class JwtAdapter implements Encrypter, Decrypter {
  constructor (private readonly secret: string) {}

  async encrypt (value: string): Promise<string> {
    const accessToken = await jwt.sign({ id: value }, this.secret)
    return accessToken
    // return Promise.resolve('')
  }

  async decrypt (token: string): Promise<string> {
    const value: any = await jwt.verify(token, this.secret)

    return value
    // return null as unknown as string
    // return null as any
    // return Promise.resolve(null as any)
  }
}
