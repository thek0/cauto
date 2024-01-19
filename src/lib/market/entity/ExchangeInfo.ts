import { Exchange } from "ccxt"

export class ExchangeInfo {
    private _id: string
    private _name: string

    constructor(exchange: Exchange) {
        this._id = exchange.id
        this._name = exchange.name
    }

    get id(): string {
        return this._id
    }

    get name(): string {
        return this._name
    }
}
