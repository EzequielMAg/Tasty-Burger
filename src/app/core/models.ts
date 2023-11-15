//import { v4 as uuid} from 'uuid';
import { ICart, IOrder, IProduct, IProductLine, IUser } from './interfaces';
import { Category, PayMode } from './enums';

export class User implements IUser {
  public id:           string;
  public name:         string;
  public email:        string;
  public password:     string;
  public phoneNumber:  number;
  public address:      string;

  public cart:         Cart;
  public orders:       Order[];

  constructor(user?: User) {
    if (user) {
      // Si por x razon cada atributo del usuario es falsy, se inicializa por default
      // o se asignan el valor de los atributos del usuario que se paso por argumento
      this.id = user.id || '';
      this.name = user.name || '';
      this.email = user.email || '';
      this.password = user.password || '';
      this.phoneNumber = user.phoneNumber || 0;
      this.address = user.address || '';
      this.cart = user.cart || new Cart();
      this.orders = user.orders || [];

    } else {
      // Si no se pasa un usuario, inicializa las propiedades a valores por defecto o vacíos
      this.id = '';
      this.name = '';
      this.email = '';
      this.password = '';
      this.phoneNumber = 0;
      this.address = '';
      this.cart = new Cart();
      this.orders = [];
    }
  }
}

export class Product implements IProduct{
  public id:           string;
  public name:         string;
  public price:        number;
  public description:  string;
  public category:     Category;
  public urlImage:     string;

  constructor(product?: Product) {
    if (product) {
      this.id = product.id || '';
      this.name = product.name || '';
      this.price = product.price || 0;
      this.description = product.description || '';
      this.category = product.category || null;
      this.urlImage = product.urlImage || '';

    } else {
      this.id = '';
      this.name = '';
      this.price = 0;
      this.description = '';
      this.category = Category.WithoutCategory;
      this.urlImage = '';
    }
  }
}


export class Cart implements ICart {
  public id:               string;
  public productLineArray: ProductLine[];
  public totalToPay:       number;

  constructor(cart?: Cart) {
    if (cart) {
      this.id = cart.id || '';
      this.productLineArray = cart.productLineArray || [];
      this.totalToPay = cart.totalToPay || 0;

    } else {
      this.id = '';
      this.productLineArray = [];
      this.totalToPay = 0;
    }
  }
}

export class ProductLine implements IProductLine {
  public id:       string;
  public quantity: number;
  public idProduct:  string;

  constructor(productLine?: any) {
    if (productLine) {
      this.id = productLine.id || '';
      this.quantity = productLine.quantity || 0;
      this.idProduct = productLine.idProduct || '';

    } else {
      this.id = '';
      this.quantity = 0;
      this.idProduct = '';
    }
  }
}

export class Order implements IOrder {
  public id:               string;
  public totalPaid:        number;
  public payMode:          PayMode;
  public dateTime:         Date | null;
  public address:          string;

  public idUser:           string;
  public productLineArray: ProductLine[];

  constructor(order?: Order) {
    if (order) {
      this.id = order.id || '';
      this.totalPaid = order.totalPaid || 0;
      this.payMode = order.payMode || null;
      this.dateTime = order.dateTime || new Date();
      this.address = order.address || '';

      this.productLineArray = order.productLineArray || [];
      this.idUser = order.idUser || '';

    } else {
      this.id = '';
      this.productLineArray = [];
      this.totalPaid = 0;
      this.payMode = PayMode.withoutPaymentMethod;
      this.dateTime = null;
      this.address = '';
      this.idUser = '';
    }
  }
}
