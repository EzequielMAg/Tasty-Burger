import { Category, PayMode } from "./enums";
import { Cart, Order, ProductLine } from "./models";

export interface IUser {
  id:          string;
  name:        string;
  email:       string;
  password:    string;
  address:     string;
  phoneNumber: number;

  cart:        Cart;
  orders:      Order[];
}

export interface IProduct{
  id:          string;
  name:        string;
  price:       number;
  description: string;

  urlImage:    string;
  category:    Category;
}

export interface ICart{
  id:               string;
  totalToPay:       number;
  productLineArray: ProductLine[];
}

export interface IProductLine {
  id:        string;
  quantity:  number;
  idProduct: string;
}

export interface IOrder{
  id: string;
  totalPaid: number;
  payMode: PayMode;
  dateTime: Date | null;
  address: string;

  productLineArray: ProductLine[];
}
