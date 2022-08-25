import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return new Promise(resolve => resolve('hash'))
  }
}))

const salt = 12

const makeSut = (): BcryptAdapter => {
  return new BcryptAdapter(salt)
}

describe('Bcrypt Adapter', () => {
  test('Should call bcrypt with correct values', async () => {
    const salt = 12
    const sut = makeSut()
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.hash('any_value')

    expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
  })

  test('Should return a hash on success', async () => {
    const sut = makeSut()
    // const hashSpy = jest.spyOn(bcrypt, 'hash')
    const hash = await sut.hash('any_value')

    expect(hash).toBe('hash')
  })

  test('Should throw if bcrypt throws', async () => {
    const sut = makeSut()
    const hashSpy = jest.spyOn(bcrypt, 'hash') as unknown as jest.Mock<ReturnType<(key: Error) => Promise<Error>>, Parameters<(key: Error) => Promise<Error>>>
    hashSpy.mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    // jest.spyOn(bcrypt, 'hash').mockReturnValueOnce(new Promise((_resolve, reject) => reject(new Error())))
    // const hashSpy = jest.spyOn(bcrypt, 'hash')
    const promise = sut.hash('any_value')

    await expect(promise).rejects.toThrow()
  })
})
