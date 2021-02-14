import {BlockchainHandler} from './BlockchainHandler'
import {Cash} from "./types/Cash";

export const createCashHistory = (files: string[]) => new BlockchainHandler<Cash>(files, [
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