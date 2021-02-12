export interface Cash {
  blockHash: string
  dataFormatId: number
  executedAtDate: string
  pocketId: number
  type: string
  amount: number
  currency: string
  exchangedTo: string
  receivedAmount: number
  receivedPocketId: number
  commissionAmount: number
  commissionCurrency: string
}
