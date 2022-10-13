import { AuthenticationModel } from '@/domain/models/authentication'

export type AuthenticationParams = {
  name?: string
  email: string
  password: string
}
export interface Authentication {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  auth (authenticationParams: AuthenticationParams): Promise<AuthenticationModel>
}
