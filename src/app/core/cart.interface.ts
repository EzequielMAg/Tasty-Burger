import { IProduct } from "./products.interface";

export interface ICart{
    productList: IProduct[],
    cartPrice: number,
    payMode: string
}