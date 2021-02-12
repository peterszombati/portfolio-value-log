import {BlockchainHandler} from "./BlockchainHandler";

export const Transactions = new BlockchainHandler(['cfd', 'crypto', 'stock'], [
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
  'commissionCurrency'
])
