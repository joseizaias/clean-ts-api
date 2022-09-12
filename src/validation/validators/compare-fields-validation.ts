import { InvalidParamError } from '../../presentation/errors'
import { Validation } from '../../presentation/protocols/validation'

export class CompareFieldsValidation implements Validation {
  constructor (
    private readonly fieldName: string,
    private readonly fieldNameCompare: string
  ) {}

  validate (input: any): Error | null {
    if (input[this.fieldName] !== input[this.fieldNameCompare]) {
      return new InvalidParamError(this.fieldName)
    }
    return null
  }
}
