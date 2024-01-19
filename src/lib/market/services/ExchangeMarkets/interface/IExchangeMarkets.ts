import { ExchangeInfo } from "../../../entity/ExchangeInfo"
import { MarketData } from "../../../entity/MarketData"
import { Pair } from "../../../entity/Pair"
import { Markets } from "../../../types"

export interface IExchangeMarkets {
    get exchange(): ExchangeInfo

    get list(): Markets

    find(pair: Pair): MarketData
}
