export interface UpdateAccessTokenRepository {
  update: (id: string, token: string) => Promise<void>
}

/***
 * mesma interface escrita de forma diferente.

export interface UpdateAccessTokenRepository {
  update (id: string, token: string): Promise<void>
}

***/
