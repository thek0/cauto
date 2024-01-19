import { Exchange, Market } from "ccxt"
import { IExchangeMarkets } from "./interface/IExchangeMarkets"
import { Markets } from "../../types"
import { ExchangeInfo } from "../../entity/ExchangeInfo"
import { MarketData } from "../../entity/MarketData"
import { Pair } from "../../entity/Pair"
import { NoSpecificMarket } from "./error/exceptions"

export class SpotActiveExchangeMarkets implements IExchangeMarkets {
    private markets: Markets
    private exchangeInfo: ExchangeInfo

    constructor(markets: Markets, exchangeInfo: ExchangeInfo) {
        this.markets = markets
        this.exchangeInfo = exchangeInfo
    }

    static async at(exchange: Exchange): Promise<SpotActiveExchangeMarkets> {
        await exchange.loadMarkets(false)
        const exchangeInfo = new ExchangeInfo(exchange)
        var allMarkets = Object.values(exchange.markets)
        var spotMarkets = allMarkets
            .filter((m: Market) => {
                return (
                    m?.spot === true &&
                    m.expiry === undefined &&
                    m.active === true
                )
            })
            .map((m: Market) => new MarketData(m, exchangeInfo))

        return new SpotActiveExchangeMarkets(spotMarkets, exchangeInfo)
    }

    get exchange(): ExchangeInfo {
        return this.exchangeInfo
    }

    get list(): Markets {
        return this.markets
    }

    public find(pair: Pair): MarketData {
        var foundMarkets = this.markets.filter((m: MarketData) => {
            return pair.isSame(m.pair)
        })

        if (foundMarkets.length !== 1) {
            throw new NoSpecificMarket()
        }

        return foundMarkets[0]
    }
}
