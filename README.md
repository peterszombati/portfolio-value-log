# portfolio-value-log

## Transaction history
`cfd.csv` is for CFD transactions for Dow Jones, EURUSD, etc.\
`crypto.csv` is for Crypto Portfolio transactions\
`stock.csv` is for Stock Portfolio transactions

0. block hash (sha256)
1. position ID (to connect open and close trades on CFD for example)
2. account ID (internal ID to make possible to separate transactions based on strategy or account type on the same service provider)
3. service provider: kbc, binance, coinbase, xtb, ib
4. ISIN: its empty if not a stock
5. Ticker: KO.US, BTCUSDT, EURUSD, DE30, US30, etc.
6. volume
7. direction: buy / sell / long / short / close (for long or short trade)
8. executedAtDate (ISO date string)
9. executedAtPrice
10. commission

example 2 Coca Cola stock buy on XTB will look like this in stock.csv:

```[hash];0;0;xtb;US1912161007;KO.US;2;buy;2021-02-08T16:27:24.820Z;50.01;0 USD```

## Cash history
`cash.csv` contains history of Cash transactions

0. block hash (sha256)
1. pocket ID
2. type: deposit / withdraw / exchange / send
3. amount
4. currency: ISO 4217
5. exchangedTo: currency (ISO 4217) (empty if it is not an exchange transaction)
6. receivedAmount (empty if it is not an exchange transaction)
7. receivedPocketID (if type is send)

example deposit 100 000 HUF to Revolut\
```[hash];0;deposit;100000;HUF;;;```

example exchange 100 000 HUF to USD\
```[hash];0;exchange;100000;HUF;USD;336.16;```

example 336.16 USD sending to XTB (id = 1) from Revolut (id = 0) pocket\
```[hash];0;send;336.16;USD;;;1```

## Blockchain history

concept; in code you can see in `src/Verify.js`
```
[hash_0] [data] // hash_0 = sha256(data)
[hash_1] [data] // hash_1 = sha256(hash_0 + sha256(data))
[hash_2] [data] // hash_2 = sha256(hash_1 + sha256(data))
[hash_3] [data] // hash_3 = sha256(hash_2 + sha256(data))
```

