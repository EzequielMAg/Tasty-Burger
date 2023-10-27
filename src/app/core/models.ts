import { Category, IProduct } from "./products.interface";
import { v4 as uuid} from 'uuid';

export class Product implements IProduct{

    idProduct: string;
    name: string;
    price: number;
    description: string;
    category: Category;
    urlImage: string;

    constructor(product: IProduct){

        this.idProduct = uuid();
        this.name = product.name;
        this.price = product.price;
        this.description = product.description;
        this.urlImage = product.urlImage;
        this.category = product.category;
    }

}