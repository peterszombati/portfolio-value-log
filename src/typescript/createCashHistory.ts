import {BlockchainHandler} from './BlockchainHandler'
import {Cash} from "./types/Cash";

export const createCashHistory = (files: string[]) => new BlockchainHandler<Cash>(files, [
  'dataFormatId',
  'executedAtDate',
  'accountId',
  'type',
  'amount',
  'currency',
  'exchangedTo',
  'receivedAmount',
  'receivedAccountId',
  'commissionAmount',
  'commissionCurrency',
  'taxAmount',
  'taxCurrency',
  'isin'
])