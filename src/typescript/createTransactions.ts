import {BlockchainHandler} from './BlockchainHandler'
import {TransactionHistory} from './types/TransactionHistory'

export const createTransactions = (files: string[]) => new BlockchainHandler<TransactionHistory>(files, [
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
