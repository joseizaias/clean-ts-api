import { InvalidParamError } from '../../errors'
import { Validation } from '../../protocols/validation'

export class CompareFieldsValidation implements Validation {
  private readonly fieldName: string
  private readonly fieldNameCompare: string

  constructor (fieldName: string, fieldNameCompare: string) {
    this.fieldName = fieldName
    this.fieldNameCompare = fieldNameCompare
  }

  validate (input: any): Error | null {
    if (input[this.fieldName] !== input[this.fieldNameCompare]) {
      return new InvalidParamError(this.fieldName)
    }
    return null
  }
}
