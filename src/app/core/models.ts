import { v4 as uuid} from 'uuid';
import { ICart, IProduct, IProductInCart, IUser } from './interfaces';
import { Category, PayMode } from './enums';

export class User implements IUser {
  public id:           string;
  public name:         string;
  public email:        string;
  public password:     string;
  public phoneNumber:  number;
  public address:      string;

  public cart:         Cart;

  constructor(user?: User) {
    if (user) {
      // Si por x razon cada atributo del usuario es falsy, se inicializa por default
      // o se asignan el valor de lso atributos del usuario que se paso por argumento
      this.id = user.id || '';
      this.name = user.name || '';
      this.email = user.email || '';
      this.password = user.password || '';
      this.phoneNumber = user.phoneNumber || 0;
      this.address = user.address || '';
      this.cart = user.cart || new Cart();

    } else {
      // Si no se pasa un usuario, inicializa las propiedades a valores por defecto o vacíos
      this.id = '';
      this.name = '';
      this.email = '';
      this.password = '';
      this.phoneNumber = 0;
      this.address = '';
      this.cart = new Cart();
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
  public productLineArray: ProductInCart[];
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

export class ProductInCart implements IProductInCart {
  public id:       string;
  public quantity: number;
  public product:  Product;

  constructor(productInCart?: any) {
    if (productInCart) {
      this.id = productInCart.id || '';
      this.quantity = productInCart.quantity || 0;
      this.product = productInCart.product || new Product();

    } else {
      this.id = '';
      this.quantity = 0;
      this.product = new Product();
    }
  }
}
