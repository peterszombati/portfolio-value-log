# portfolio-value-log

## Transaction history
`cfd.csv` is for CFD transactions for Dow Jones, EURUSD, etc.\
`crypto.csv` is for Crypto Portfolio transactions\
`stock.csv` is for Stock Portfolio transactions

0. block hash (sha256)
1. data format id: number (if in the future data structure will be changed it would be easier to track)
2. executedAtDate (ISO date string)
3. positionId: number (to connect open and close trades on CFD for example)
4. accountId: number (internal ID to make possible to separate transactions based on strategy or account type on the same service provider)
5. service provider: kbc, binance, coinbase, xtb, ib
6. ISIN: its empty if not a stock
7. Ticker: KO.US, BTCUSDT, EURUSD, DE30, US30, etc.
8. volume: number
9. direction: buy / sell / long / short / close (for long or short trade)
10. executedPrice: number
11. executedCurrency: ISO 4217
12. commissionAmount: number
13. commissionCurrency: ISO 4217

example 2 Coca Cola stock buy on XTB will look like this in stock.csv:

```[hash];0;2021-02-08T16:27:24.820Z;0;0;xtb;US1912161007;KO.US;2;buy;50.01;USD;0;USD```

## Cash history
`cash.csv` contains history of Cash transactions

0. block hash (sha256)
1. data format id: number (if in the future data structure will be changed it would be easier to track)
2. executedAtDate (ISO date string)
3. pocketId: number
4. type: deposit / withdraw / exchange / send
5. amount: number
6. currency: ISO 4217
7. exchangedTo: currency (ISO 4217) (empty if it is not an exchange transaction)
8. receivedAmount (required for exchange / deposit transaction)
9. receivedPocketID (if type is send)
10. commissionAmount: number
11. commissionCurrency: ISO 4217


example deposit 100 000 HUF to Revolut\
```[hash];0;2021-02-08T16:27:24.820Z;0;deposit;100000;HUF;;100000;;0;HUF```

example exchange 100 000 HUF to USD\
```[hash];0;2021-02-08T16:27:24.820Z;0;exchange;100000;HUF;USD;336.16;;0;USD```

example 336.16 USD sending to XTB (id = 1) from Revolut (id = 0) pocket\
```[hash];0;2021-02-08T16:27:24.820Z;0;send;336.16;USD;;;1;0;USD```

## Blockchain history

concept; in code you can see in `src/Verify.js`
```
[hash_0] [data] // hash_0 = sha256(data)
[hash_1] [data] // hash_1 = sha256(hash_0 + sha256(data))
[hash_2] [data] // hash_2 = sha256(hash_1 + sha256(data))
[hash_3] [data] // hash_3 = sha256(hash_2 + sha256(data))
```

