export interface Validation {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  validate (input: any): Error | null
}

// export interface Validation {
//   validate: (input: any) => Error | null
// }

/****

export interface Validation {
  validate(input: any): Error
}

 */
