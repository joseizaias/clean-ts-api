export interface HashComparer {
  compare: (value: string, hash: string) => Promise<boolean>
}

/***
* O código original é este:
    export interface HashComparer {
      compare (value: string, hash: string): Promise<boolean>
    }

 */
