import bcrypt from 'bcrypt'

import { BcryptAdapter } from './bcrypt-adapter'
import { throwError } from '@/domain/test'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return Promise.resolve('hash')
  },
  async compare (): Promise<boolean> {
    return Promise.resolve(true)
  }
}))

const salt = 12

const makeSut = (): BcryptAdapter => {
  return new BcryptAdapter(salt)
}

describe('Bcrypt Adapter', () => {
  describe('hash()', () => {
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
      hashSpy.mockImplementationOnce(throwError)
      const promise = sut.hash('any_value')

      await expect(promise).rejects.toThrow()
    })
  })

  describe('compare()', () => {
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
      const compareSpy = jest.spyOn(bcrypt, 'compare') as unknown as jest.Mock<ReturnType<(key: string) => Promise<boolean>>> // .mockReturnValue(Promise.resolve(false))
      compareSpy.mockReturnValue(Promise.resolve(false)) /// mockReturnValueOnce(false)
      // compareSpy.mockReturnValueOnce(false) // .mockReturnValue(Promise.resolve(false))
      const isValid = await sut.compare('any_value', 'any_hash')

      expect(isValid).toBeFalsy()
    })

    test('Should throw if compare throws', async () => {
      const sut = makeSut()
      const compareSpy = jest.spyOn(bcrypt, 'compare') as unknown as jest.Mock<ReturnType<(key: Error) => Promise<Error>>, Parameters<(key: Error) => Promise<Error>>>
      compareSpy.mockImplementationOnce(throwError)
      const promise = sut.compare('any_value', 'any_hash')

      await expect(promise).rejects.toThrow()
    })
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
