import jwt from 'jsonwebtoken'
import { JwtAdapter } from './jwt-adapter'

jest.mock('jsonwebtoken', () => ({
  async sign (): Promise<string> {
    return new Promise(resolve => resolve('any_token'))
  },

  async verify (token: string): Promise<string> {
    return new Promise(resolve => resolve('any_value'))
  }
}))

const makeSut = (): JwtAdapter => {
  return new JwtAdapter('secret')
}

describe('JWT Adapter', () => {
  describe('sign()', () => {
    test('Should call sign with correct values', async () => {
      const sut = makeSut()
      const signSpy = jest.spyOn(jwt, 'sign')
      await sut.encrypt('any_id')
      expect(signSpy).toHaveBeenCalledWith({ id: 'any_id' }, 'secret')
    })

    test('Should returns a token on sign success', async () => {
      const sut = makeSut()
      const accessToken = await sut.encrypt('any_id')
      expect(accessToken).toBe('any_token')
    })

    test('Should throws if sign throws', async () => {
      const sut = makeSut()
      // jest.spyOn(jwt, 'sign').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
      // a linha acima não funciona porque tem vários tipos de retorno e isso causa confusão para TypeScript. SEndo assim,
      // temos que usar o mockImplementationOnce(), conforme abaixo
      jest.spyOn(jwt, 'sign').mockImplementationOnce(() => {
        throw new Error()
      })
      const promise = sut.encrypt('any_id')
      await expect(promise).rejects.toThrow()
    })
  })

  describe('verify()', () => {
    test('Should call verify with correct values', async () => {
      const sut = makeSut()
      const verifySpy = jest.spyOn(jwt, 'verify')
      await sut.decrypt('any_token')
      expect(verifySpy).toHaveBeenCalledWith('any_token', 'secret')
    })

    test('Should returns a value on verify success', async () => {
      const sut = makeSut()
      const accessToken = await sut.decrypt('any_token')
      expect(accessToken).toBe('any_value')
    })

    // test('Should throws if sign throws', async () => {
    //   const sut = makeSut()
    //   // jest.spyOn(jwt, 'sign').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    //   // a linha acima não funciona porque tem vários tipos de retorno e isso causa confusão para TypeScript. SEndo assim,
    //   // temos que usar o mockImplementationOnce(), conforme abaixo
    //   jest.spyOn(jwt, 'sign').mockImplementationOnce(() => {
    //     throw new Error()
    //   })
    //   const promise = sut.encrypt('any_id')
    //   await expect(promise).rejects.toThrow()
    // })
  })
})
