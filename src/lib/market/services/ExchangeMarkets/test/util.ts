import { Market } from "ccxt"

type MarketType = "spot" | "margin" | "swap" | "future" | "option"
type SubType = "linear" | "inverse" | undefined
interface MinMax {
    min: number
    max: number
}
interface TestMarketInterface {
    id?: string
    numericId?: number
    uppercaseId?: string
    lowercaseId?: string
    symbol?: string
    base?: string
    quote?: string
    baseId?: string
    quoteId?: string
    active?: boolean
    type?: MarketType
    subType?: SubType
    spot?: boolean
    margin?: boolean
    swap?: boolean
    future?: boolean
    option?: boolean
    contract?: boolean
    settle?: string
    settleId?: string
    contractSize?: number
    linear?: boolean
    inverse?: boolean
    quanto?: boolean
    expiry?: number
    expiryDatetime?: string
    strike?: number
    optionType?: string
    taker?: number
    maker?: number
    percentage?: boolean | undefined
    tierBased?: boolean | undefined
    feeSide?: string | undefined
    precision?: {
        amount?: number
        price?: number
        cost?: number
    }
    limits?: {
        amount?: MinMax
        cost?: MinMax
        leverage?: MinMax
        price?: MinMax
    }
    created?: number
    info?: any
}

export function createMarketInterface(options: TestMarketInterface): Market {
    return {
        id: options.id,
        numericId: options.numericId,
        uppercaseId: options.uppercaseId,
        lowercaseId: options.lowercaseId,
        symbol: options.symbol,
        base: options.base,
        quote: options.quote,
        baseId: options.baseId,
        quoteId: options.quoteId,
        active: options.active,
        type: options.type,
        subType: options.subType,
        spot: options.spot,
        margin: options.margin,
        swap: options.swap,
        future: options.future,
        option: options.option,
        contract: options.contract,
        settle: options.settle,
        settleId: options.settleId,
        contractSize: options.contractSize,
        linear: options.linear,
        inverse: options.inverse,
        quanto: options.quanto,
        expiry: options.expiry,
        expiryDatetime: options.expiryDatetime,
        strike: options.strike,
        optionType: options.optionType,
        taker: options.taker,
        maker: options.maker,
        percentage: options.percentage,
        tierBased: options.tierBased,
        feeSide: options.feeSide,
        precision: {
            amount: options.precision.amount,
            price: options.precision.price,
            cost: options.precision.cost,
        },
        limits: {
            amount: options.limits.amount,
            cost: options.limits.cost,
            leverage: options.limits.leverage,
            price: options.limits.price,
        },
        created: options.created,
        info: options.info,
    }
}
