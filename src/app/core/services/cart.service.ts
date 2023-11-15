import { Injectable } from '@angular/core';
import { ProductLine, Product, Cart } from '../models';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart: Cart = new Cart();

  //TODO: variable q indica si esta en la page cart o en el menupage, para que el carrito cambie de estilos
  private _inPageCart: boolean = false;

  constructor(private productService: ProductsService) { }

  //#region GETTERS
  get cart(): Cart {
    return this._cart;
  }

  get totalToPay(): number {
    return this._cart.totalToPay;
  }

  get inPageCart(): boolean {
    return this._inPageCart;
  }
  //#endregion

  public updateProductFromCart(newProductInCart: ProductLine): void {

    // Busca si el productLine ya está en el _productLineArray
    const existingProductLine: ProductLine | undefined = this.findProductInCart(newProductInCart);

    if (existingProductLine) {
      // Si el productLine ya existe, se verifica si el atrib quantity es 0, y se elimina, sino se modifica tal quantity.
      ( existingProductLine.quantity === 0 ) ?
        this.deleteProductFromCart(existingProductLine) :
        existingProductLine.quantity = newProductInCart.quantity;

    } else {
      // Si el productLine no existe, se agrega al final del arreglo.
      this._cart.productLineArray.push(newProductInCart);
    }

    // Actualiza el total a pagar
    this._cart.totalToPay = this.calculateTotalToPay();

    (this._cart.productLineArray.length === 0) ? this.clearCart() : this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this._cart)); //JSON.stringify: convierte un objeto en string
  }


  private findProductInCart(productLine: ProductLine): ProductLine | undefined {
    return this._cart.productLineArray.find( productInCart => productInCart.idProduct === productLine.idProduct );
  }

  private deleteProductFromCart(productLine: ProductLine): void {

    if (productLine) {
      const index: number = this._cart.productLineArray.indexOf(productLine);

      if (index !== -1) {
        this._cart.productLineArray.splice(index, 1);
      }
    }
  }

  public clearCart(): void {
    this._cart.totalToPay = 0;
    this._cart.productLineArray.splice(0, this._cart.productLineArray.length);
    console.log()
    localStorage.removeItem('cart');
  }

  public getQuantityProductLineByIdProduct(id: string): number {
    const result = this._cart.productLineArray.find( productLine => productLine.idProduct === id );

    if(result?.quantity === undefined) return 0;

    return result?.quantity;
  }

  private calculateTotalToPay(): number {

    let totalToPay: number = this.cart.productLineArray.reduce( (total, productLine) => {

      const product: Product = this.productService.getProductById(productLine.idProduct)!;

      const productPrice: number = product.price;
      const quantity: number = productLine.quantity;
      const subtotal: number = productPrice * quantity;

      return total + subtotal;
    }, 0);

    return totalToPay;
  }
}
