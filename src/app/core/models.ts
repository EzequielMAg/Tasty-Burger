import { v4 as uuid} from 'uuid';
import { Category, IProduct, IUser } from './interfaces';

export class User implements IUser{
    id: string;
    name: string;
    email: string;
    password: string;
    phoneNumber: number;
    address: string;

    constructor(user?: any){
        this.id = user.id != null ? user.id : null;
        this.name = user.name != null ? user.name : null;
        this.email = user.email != null ? user.email : null;
        this.password = user.password != null ? user.password : null;
        this.phoneNumber = user.phoneNumber != null ? user.phoneNumber : null;
        this.address = user.address != null ? user.address : null;
    }
}

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