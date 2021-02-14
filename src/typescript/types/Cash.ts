export interface Cash {
  blockHash?: string
  dataFormatId: number
  executedAtDate: string
  pocketId: number
  type: 'deposit' | 'withdraw' | 'exchange' | 'send' | 'dividend'
  amount: number
  currency: string
  exchangedTo: string
  receivedAmount: number
  receivedPocketId: number
  commissionAmount: number
  commissionCurrency: string
  taxAmount: number
  taxCurrency: string
  isin: string
}
