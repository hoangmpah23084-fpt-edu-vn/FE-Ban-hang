export interface IProduct {
    _id?: string | number,
    name: string,
    price: string | number,
    priceSale: string | number,
    describe: string,
    images?: string,
    categoryId?: string,

}