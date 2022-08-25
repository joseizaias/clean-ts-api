export interface TokenGenerator {
  generate: (id: string) => Promise<string>
}

/******
 *
 *
    export interface TokenGenerator {
      generate (id: string): Promise<string>
    }

 */
