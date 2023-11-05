import { Category } from "./enums";
import { Cart, Product, ProductInCart } from "./models";

export interface IUser {
  id:          string;// | null;  //TODO: Revisar que pasa aca despues por haber comentado esto..
  name:        string;
  email:       string;
  password:    string;
  phoneNumber: number;
  address:     string;

  cart:        Cart;
}

export interface IProduct{
  id:          string;// | null;  //TODO: Revisar que pasa aca despues por haber comentado esto..
  name:        string;
  price:       number;
  description: string;

  category:    Category;
  urlImage:    string;
}

export interface ICart{
  id:               string;
  productLineArray: ProductInCart[];
  totalToPay:       number;
}

export interface IProductInCart {
  id:       string;
  quantity: number;
  product:  Product;
}
