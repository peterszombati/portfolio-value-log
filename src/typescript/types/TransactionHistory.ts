export interface TransactionHistory {
  blockHash?: string
  dataFormatId: number
  executedAtDate: string
  positionId: number
  accountId: number
  serviceProvider: 'kbc' | 'binance' | 'coinbase' | 'xtb' | 'ib'
  ISIN: string
  Ticker: string
  volume: number
  direction: 'buy' | 'sell' | 'long' | 'short' | 'close'
  executedPrice: number
  executedCurrency: string
  commissionAmount: number
  commissionCurrency: string
  taxAmount: number
  taxCurrency: string
}
