export interface Validation {
  validate: (input: any) => Error | null
}

/****

export interface Validation {
  validate(input: any): Error
}

 */
