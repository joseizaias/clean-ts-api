export type AuthenticationParams = {
  email: string
  password: string
}
export interface Authentication {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  auth (authentication: AuthenticationParams): Promise<string>
}

// usando o padrão do eslint, teríamos que configurar dessa forma a interface Authentication:
// export interface Authentication {
//   auth: (email: string, password: string) => Promise<string>
// }
