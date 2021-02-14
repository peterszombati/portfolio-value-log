import {createCashHistory} from "../src/typescript/createCashHistory";

describe('test', () => {
  it('test', () => {
    createCashHistory(['log/demo/cash']).push('cash', {
      dataFormatId: 0,
      executedAtDate: new Date().toISOString(),
      accountId: 0,
      type: 'deposit',
      amount: 0,
      currency: 'HUF',
      exchangedTo: '',
      receivedAmount: 0,
      receivedAccountId: 0,
      commissionAmount: 0,
      commissionCurrency: '',
      taxAmount: 0,
      taxCurrency: '',
      isin: ''
    })
  })
})