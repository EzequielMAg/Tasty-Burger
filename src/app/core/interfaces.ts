import { Category, PayMode } from "./enums";
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

export interface IOrder{
  id: string;
  totalPaid: number;
  payMode: PayMode;
  date: Date | null;
  address: string;

  idUser: string;
  productLineArray: IProductInOrder[];
}


export interface IProductInOrder{
  id: string;
  quantity: number;
  product: Product;
  
}