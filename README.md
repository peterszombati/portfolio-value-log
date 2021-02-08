# portfolio-value-log

cfd.csv contains my CFD transactions for Dow Jones, EURUSD, etc.
crypto.csv is for my Crypto Portfolio transactions
stock.csv is for my Stock Portfolio transactions

# data format

0. position ID (to connect open and close trades on CFD for example)
2. account ID (internal ID to make possible to separate transactions based on strategy or account type on the same service provider)
1. service provider: kbc, binance, coinbase, xtb, ib
2. ISIN: its empty if not a stock
3. Ticker: KO.US, BTCUSDT, EURUSD, DE30, US30, etc.
5. volume
6. direction: buy / sell / long / short / close (for long or short trade)
7. executedAtDate (ISO date string)
8. executedAtPrice
9. commission

example 2 Coca Cola buy on XTB will look like this in stocks.csv:
```0;0;xtb;US1912161007;KO.US;2;buy;2021-02-08T16:27:24.820Z;50.01;0 USD```