import ccxt from "ccxt"
import { SpotActiveExchangeMarkets } from "./src/lib/market/services/ExchangeMarkets/SpotActiveExchangeMarkets"

const binance = new ccxt.binance()

async function main() {
    const exMarkets = await SpotActiveExchangeMarkets.at(binance)
    exMarkets.list.map((m) => console.log(m.id))
}

main()
