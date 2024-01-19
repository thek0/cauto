import type { Exchange, Market } from "ccxt"
import { ExchangeInfo } from "./ExchangeInfo"
import { Pair } from "./Pair"
import { Coin } from "./Coin"

export class MarketData {
    private market: Market
    private exchangeInfo: ExchangeInfo

    private _base: Coin
    private _quote: Coin
    private _pair: Pair

    constructor(market: Market, exchangeInfo: ExchangeInfo) {
        this.market = market
        this.exchangeInfo = exchangeInfo
        this._base = new Coin(this.market.base, this.market.baseId)
        this._quote = new Coin(this.market.quote, this.market.quoteId)
    }

    get exchange(): ExchangeInfo {
        return this.exchangeInfo
    }

    get id(): string {
        return this.market.id
    }

    get symbol(): string {
        return this.market.symbol
    }

    get active(): boolean {
        return this.market.active
    }

    get pair(): Pair {
        if (this._pair === undefined) {
            this._pair = new Pair(this._base, this._quote)
        }
        return this._pair
    }

    get base(): Coin {
        return this._base
    }

    get quote(): Coin {
        return this.quote
    }
}
