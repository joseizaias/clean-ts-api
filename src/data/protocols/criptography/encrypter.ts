export interface Encrypter {
  encrypt: (value: string) => Promise<string>
}

/******
 *
 *
    export interface Encrypter {
      encrypt (value: string): Promise<string>
    }

 */
