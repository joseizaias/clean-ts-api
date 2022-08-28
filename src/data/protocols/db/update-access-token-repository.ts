export interface UpdateAccessTokenRepository {
  updateAccessToken: (id: string, token: string) => Promise<void>
}

/***
 * mesma interface escrita de forma diferente.

export interface UpdateAccessTokenRepository {
  updateAccessToken (id: string, token: string): Promise<void>
}

***/
