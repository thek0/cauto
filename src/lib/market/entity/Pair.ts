import type { Coin } from "./Coin"

export class Pair {
    private _base: Coin
    private _quote: Coin

    constructor(base: Coin, quote: Coin) {
        this._base = base
        this._quote = quote
    }

    get base(): Coin {
        return this._base
    }

    get quote(): Coin {
        return this._quote
    }

    public isSame(pair: Pair): boolean {
        return (
            this._base.symbol === pair.base.symbol &&
            this._quote.symbol === pair.quote.symbol
        )
    }
}
