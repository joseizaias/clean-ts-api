import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return new Promise(resolve => resolve('hash'))
  },
  async compare (): Promise<boolean> {
    return new Promise(resolve => resolve(true))
  }
}))

const salt = 12

const makeSut = (): BcryptAdapter => {
  return new BcryptAdapter(salt)
}

describe('Bcrypt Adapter', () => {
  test('Should call hash with correct values', async () => {
    const salt = 12
    const sut = makeSut()
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.hash('any_value')

    expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
  })

  test('Should return a valid hash on hash success', async () => {
    const sut = makeSut()
    // const hashSpy = jest.spyOn(bcrypt, 'hash')
    const hash = await sut.hash('any_value')

    expect(hash).toBe('hash')
  })

  test('Should throw if hash throws', async () => {
    const sut = makeSut()
    const hashSpy = jest.spyOn(bcrypt, 'hash') as unknown as jest.Mock<ReturnType<(key: Error) => Promise<Error>>, Parameters<(key: Error) => Promise<Error>>>
    hashSpy.mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    // jest.spyOn(bcrypt, 'hash').mockReturnValueOnce(new Promise((_resolve, reject) => reject(new Error())))
    // const hashSpy = jest.spyOn(bcrypt, 'hash')
    const promise = sut.hash('any_value')

    await expect(promise).rejects.toThrow()
  })

  test('Should call compare with correct values', async () => {
    const sut = makeSut()
    const compareSpy = jest.spyOn(bcrypt, 'compare')
    await sut.compare('any_value', 'any_hash')

    expect(compareSpy).toHaveBeenCalledWith('any_value', 'any_hash')
  })

  test('Should return a true when compare succeeds', async () => {
    const sut = makeSut()
    const isValid = await sut.compare('any_value', 'any_hash')

    expect(isValid).toBeTruthy()
  })

  test('Should return a false when compare fails', async () => {
    const sut = makeSut()
    const compareSpy = jest.spyOn(bcrypt, 'compare') as unknown as jest.Mock<ReturnType<(key: string) => Promise<boolean>>> // .mockReturnValue(new Promise(resolve => resolve(false)))
    compareSpy.mockReturnValue(new Promise(resolve => resolve(false))) /// mockReturnValueOnce(false)
    // compareSpy.mockReturnValueOnce(false) // .mockReturnValue(new Promise(resolve => resolve(false)))
    const isValid = await sut.compare('any_value', 'any_hash')

    expect(isValid).toBeFalsy()
  })

  test('Should throw if compare throws', async () => {
    const sut = makeSut()
    const compareSpy = jest.spyOn(bcrypt, 'compare') as unknown as jest.Mock<ReturnType<(key: Error) => Promise<Error>>, Parameters<(key: Error) => Promise<Error>>>
    compareSpy.mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    // jest.spyOn(bcrypt, 'compare').mockReturnValueOnce(new Promise((_resolve, reject) => reject(new Error())))
    // const compareSpy = jest.spyOn(bcrypt, 'compare')
    const promise = sut.compare('any_value', 'any_hash')

    await expect(promise).rejects.toThrow()
  })
})

/***
 *
const hashSpy = jest.spyOn(bcrypt, "hash") as unknown as jest.Mock<
      ReturnType<(key: string) => Promise<string>>,
      Parameters<(key: string) => Promise<string>>
    >;
hashSpy.mockResolvedValueOnce("hashedPassword");
 */
