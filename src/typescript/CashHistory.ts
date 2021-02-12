import {BlockchainHandler} from './BlockchainHandler'

export const CashHistory = new BlockchainHandler(['cash'], [
  'blockHash',
  'dataFormatId',
  'executedAtDate',
  'pocketId',
  'type',
  'amount',
  'currency',
  'exchangedTo',
  'receivedAmount',
  'receivedPocketId',
  'commissionAmount',
  'commissionCurrency'])