import { v4 as uuid} from 'uuid';
import { Category, IProduct, IUser } from './interfaces';

export class User implements IUser{
  id:           string;
  name:         string;
  email:        string;
  password:     string;
  phoneNumber:  number;
  address:      string;

  constructor(user?: any){
    this.id = user.id === undefined ? uuid() : user.id ;
    this.name = user.name === undefined ? null : user.name;
    this.email = user.email === undefined ? null : user.email;
    this.password = user.password === undefined ? null : user.password;
    this.phoneNumber = user.phoneNumber === undefined ? null : user.phoneNumber;
    this.address = user.address === undefined ? null : user.address;
  }
}

export class Product implements IProduct{
  id:           string;
  name:         string;
  price:        number;
  description:  string;
  category:     Category;
  urlImage:     string;

  constructor(product?: any){
    this.id = product.id === undefined ? uuid() : product.id;
    this.name = product.name === undefined ? null :  product.name;
    this.price = product.price === undefined ? null : product.price;
    this.description = product.description === undefined ? null : product.description;
    this.urlImage = product.urlImage === undefined ? null : product.urlImage;
    this.category = product.category === undefined ? null : product.category;
  }
}
