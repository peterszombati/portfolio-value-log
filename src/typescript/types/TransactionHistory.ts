export interface TransactionHistory {
  blockHash: string
  dataFormatId: number
  executedAtDate: string
  positionId: number
  accountId: number
  serviceProvider: string
  ISIN: string
  Ticker: string
  volume: number
  direction: string
  executedPrice: number
  executedCurrency: string
  commissionAmount: number
  commissionCurrency: string
}
