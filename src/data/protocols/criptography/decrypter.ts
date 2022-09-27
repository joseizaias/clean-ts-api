export interface Decrypter {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  decrypt (value: string): Promise<string>
}

/******
 *
 *
    export interface Encrypter {
      decrypt: (value: string) => Promise<string>
      encrypt (value: string): Promise<string>
    }

 */
