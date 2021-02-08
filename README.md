# portfolio-value-log

cfd.csv contains CFD transactions for Dow Jones, EURUSD, etc.\
crypto.csv is for Crypto Portfolio transactions\
stock.csv is for Stock Portfolio transactions

# Data format

0. position ID (to connect open and close trades on CFD for example)
1. account ID (internal ID to make possible to separate transactions based on strategy or account type on the same service provider)
2. service provider: kbc, binance, coinbase, xtb, ib
3. ISIN: its empty if not a stock
4. Ticker: KO.US, BTCUSDT, EURUSD, DE30, US30, etc.
5. volume
6. direction: buy / sell / long / short / close (for long or short trade)
7. executedAtDate (ISO date string)
8. executedAtPrice
9. commission

example 2 Coca Cola stock buy on XTB will look like this in stock.csv:

```0;0;xtb;US1912161007;KO.US;2;buy;2021-02-08T16:27:24.820Z;50.01;0 USD```
