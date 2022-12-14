import { SignUpController } from './signup-controller'
import { ServerError, MissingParamError, EmailInUseError } from '@/presentation/errors'
import { AddAccount, HttpRequest, Validation, Authentication } from './signup-controller-protocols'
import { ok, serverError, badRequest, forbidden } from '@/presentation/helpers/http/http-helper'
import { throwError } from '@/domain/test'
import { mockAddAccount, mockAuthentication, mockValidation } from '@/presentation/test'

const mockRequest = (): HttpRequest => ({
  body: {
    name: 'any_name',
    email: 'any_email@mail.com',
    password: 'any_password',
    passwordConfirmation: 'any_password'
  }
})

type SutTypes = {
  sut: SignUpController
  addAccountStub: AddAccount
  validationStub: Validation
  authenticationStub: Authentication
}

const makeSut = (): SutTypes => {
  const authenticationStub = mockAuthentication()
  const addAccountStub = mockAddAccount()
  const validationStub = mockValidation()
  const sut = new SignUpController(addAccountStub, validationStub, authenticationStub)
  return {
    sut,
    addAccountStub,
    validationStub,
    authenticationStub
  }
}

describe('SignUp controller', () => {
  test('Should return 500 if AddAccount throws', async () => {
    const { sut, addAccountStub } = makeSut()
    jest.spyOn(addAccountStub, 'add').mockImplementationOnce(async () => {
      return Promise.reject(new Error())
    })

    const httpResponse = await sut.handle(mockRequest())

    expect(httpResponse).toEqual(serverError(new ServerError('')))
  })

  test('Should call AddAccount with correct values', async () => {
    const { sut, addAccountStub } = makeSut()
    const addSpy = jest.spyOn(addAccountStub, 'add')

    await sut.handle(mockRequest())
    expect(addSpy).toHaveBeenCalledWith({
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password'
    })
  })

  test('Should return 200 if an valid data is provided', async () => {
    const { sut } = makeSut()

    const httpResponse = await sut.handle(mockRequest())

    expect(httpResponse).toEqual(ok({ name: 'any_name', accessToken: 'any_token' }))
  })

  test('Should return 403 if AddAccount return null', async () => {
    const { sut, addAccountStub } = makeSut()

    const addSpy = jest.spyOn(addAccountStub, 'add') as unknown as jest.Mock<ReturnType<() => Promise<null>>, Parameters<() => Promise<null>>>
    addSpy.mockReturnValueOnce(Promise.resolve(null))

    const httpResponse = await sut.handle(mockRequest())

    expect(httpResponse).toEqual(forbidden(new EmailInUseError()))
  })

  test('Should call Validation with correct value', async () => {
    const { sut, validationStub } = makeSut()
    const validateSpy = jest.spyOn(validationStub, 'validate')

    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(validateSpy).toHaveBeenCalledWith(httpRequest.body)
  })

  test('Should return 400 if an validation returns an error', async () => {
    const { sut, validationStub } = makeSut()
    jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new MissingParamError('any_field'))

    const httpResponse = await sut.handle(mockRequest())

    expect(httpResponse).toEqual(badRequest(new MissingParamError('any_field')))
  })

  test('Should call Authentication with correct values', async () => {
    const { sut, authenticationStub } = makeSut()
    const authSpy = jest.spyOn(authenticationStub, 'auth')

    await sut.handle(mockRequest())
    expect(authSpy).toHaveBeenCalledWith({
      email: 'any_email@mail.com',
      password: 'any_password'
    })
  })

  test('Should return 500 if Authentication throws', async () => {
    const { sut, authenticationStub } = makeSut()
    // Para mocar e alterar o comportamento de um m??todo ou fun????o, usa-se o
    //      jest.spyOn(emailValidatorStub, 'isValid').mockReturnValueOnce(valor ser retornado pela fun????o que deve ser de tipo compartivel com o retorno da fun????o)
    // Para mocar e modificar o tipo de retorno, deve-se usar o mockImplementationOnce() - veja abaixo:
    jest.spyOn(authenticationStub, 'auth').mockImplementationOnce(throwError)

    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
