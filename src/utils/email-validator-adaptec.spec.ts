import { EmailValidatorAdapter } from './email-validator'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail () {
    return true
  }
}))

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const makeSut = () => {
  return new EmailValidatorAdapter()
}

describe('EmailValidator Adapter', () => {
  test('Should return false if validator returns false', () => {
    const sut = makeSut()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    // jest.spyOn(validator, 'isEmail').mockReturnValue(false)
    const isValid = sut.isValid('invalid_email@gmail.com')

    expect(isValid).toBe(false)
  })

  test('Should return true if validator returns true', () => {
    const sut = makeSut()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(true)
    // jest.spyOn(validator, 'isEmail').mockReturnValue(true)
    const isValid = sut.isValid('valid_email@gmail.com')

    expect(isValid).toBe(true)
  })

  test('Should call validator with correct email', () => {
    const sut = makeSut()
    const isEmailSpy = jest.spyOn(validator, 'isEmail')
    sut.isValid('any_email@mail.com')

    expect(isEmailSpy).toHaveBeenCalledWith('any_email@mail.com')
  })
})
