import {BlockchainHandler} from './BlockchainHandler'
import {TransactionHistory} from './types/TransactionHistory'

export const Transactions = new BlockchainHandler<TransactionHistory>(['cfd', 'crypto', 'stock'], [
  'blockHash',
  'dataFormatId',
  'executedAtDate',
  'positionId',
  'accountId',
  'serviceProvider',
  'ISIN',
  'Ticker',
  'volume',
  'direction',
  'executedPrice',
  'executedCurrency',
  'commissionAmount',
  'commissionCurrency',
  'taxAmount',
  'taxCurrency'
])
