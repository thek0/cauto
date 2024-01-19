export class Coin {
    private _symbol: string
    private _name?: string

    constructor(symbol: string, name?: string) {
        this._symbol = symbol
        this._name = name
    }

    get symbol(): string {
        return this._symbol.toUpperCase()
    }

    get name(): string {
        return this._name ?? ""
    }
}
