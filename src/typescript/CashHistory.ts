import {BlockchainHandler} from './BlockchainHandler'
import {Cash} from "./types/Cash";

export const CashHistory = new BlockchainHandler<Cash>(['cash'], [
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
  'commissionCurrency',
  'taxAmount',
  'taxCurrency',
  'isin'
])