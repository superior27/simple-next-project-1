export class Product {
    constructor(
        private _id: number,
        private _price: number,
        private _name: string,
    ){}
 
    public get id() : number {
        return this._id;
    }

    public get price(): number
    {
        return this._price;
    }

    public get name(): string
    {
        return this._name;
    }
 
    public set price(price : number) {
        this._price = price;
    }

    public set name(name : string) {
        this._name = name;
    }
    

}