export type Blockchain = {
  blockhash: string
  data: string
}[]

export interface Blockchains {
  [name: string]: Blockchain
}