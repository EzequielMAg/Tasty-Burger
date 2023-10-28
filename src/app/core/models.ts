import { v4 as uuid} from 'uuid';
import { Category, IProduct } from './interfaces';

export class Product implements IProduct{

    id: string;
    name: string;
    price: number;
    description: string;
    category: Category;
    urlImage: string;

    constructor(product?: any){

        // this.id = uuid();
        this.id = product.id != null ? product.id : null;
        this.name = product.name != null ? product.name : null;
        this.price = product.price != null ? product.price : null;
        this.description = product.description != null ? product.description : null;
        this.urlImage = product.urlImage != null ? product.urlImage : null;
        this.category = product.category != null ? product.category : null;
    }
    

}