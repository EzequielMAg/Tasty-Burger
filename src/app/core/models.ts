import { v4 as uuid} from 'uuid';
import { ICart, IProduct, IProductInCart, IUser } from './interfaces';
import { Category, PayMode } from './enums';

export class User implements IUser{
  id:           string;
  name:         string;
  email:        string;
  password:     string;
  phoneNumber:  number;
  address:      string;

  cart:         Cart;

  constructor(user?: any){
    this.id = user.id === undefined ? uuid() : user.id ;
    this.name = user.name === undefined ? null : user.name;
    this.email = user.email === undefined ? null : user.email;
    this.password = user.password === undefined ? null : user.password;
    this.phoneNumber = user.phoneNumber === undefined ? null : user.phoneNumber;
    this.address = user.address === undefined ? null : user.address;

    this.cart = user.cart === undefined ? null : user.cart;
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


export class Cart implements ICart {
  id:               string;
  productLineArray: ProductInCart[];
  totalToPay:       number;

  constructor(cart?: any){
    this.id = cart.id === undefined ? uuid() : cart.id ;
    this.totalToPay = cart.totalToPay === undefined ? null : cart.totalToPay;
    this.productLineArray = cart.productLineArray === undefined ? null : cart.productLineArray;
  }
}

export class ProductInCart implements IProductInCart {
  id:       string;
  quantity: number;
  product:  Product;

  constructor(productInCart?: any){
    this.id = productInCart.id === undefined ? uuid() : productInCart.id ;
    this.quantity = productInCart.quantity === undefined ? null : productInCart.quantity;
    this.product = productInCart.product === undefined ? null : productInCart.product;
  }
}
