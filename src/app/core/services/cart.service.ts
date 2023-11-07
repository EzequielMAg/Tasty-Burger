import { Injectable } from '@angular/core';
import { ProductInCart } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // Va contener todos los productos del carrito c/u con su cantidad (objeto ProductInCart)
  private _cart: ProductInCart[] = [];

  constructor() { }

  get cart(): ProductInCart[] {
    return this._cart;
  }

  public updateProductInCart(newProductLine: ProductInCart): void {

    /* console.log(productLine); */
    //TODO: validar que el producto ya esta en el carrito y solamente actualizar su cantidad...
    // Busca si el productLine ya está en el _productLineArray
    const existingProductLine: ProductInCart | undefined = this.findProductLine(newProductLine);

    console.log(existingProductLine);

    if (existingProductLine) {
      // Si el productLine ya existe, se verifica si el atrib quantity es 0, y se elimina, sino se modifica tal quantity.
      ( existingProductLine.quantity === 0 ) ?
        this.deleteProductLine(existingProductLine) :
        existingProductLine.quantity = newProductLine.quantity;

    } else {
      // Si el productLine no existe, se agrega al final del arreglo.
      this._cart.push(newProductLine);
    }

    /* console.log(this._productLineArray); */
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this._cart)); //JSON.stringify: convierte un objeto en string
  }

  private findProductLine(productLine: ProductInCart): ProductInCart | undefined {
    return this._cart.find( cart => cart.product.id === productLine.product.id );
  }

  private deleteProductLine(productLine: ProductInCart): void {

    if (productLine) {
      const index: number = this._cart.indexOf(productLine);

      if (index !== -1) {
        this._cart.splice(index, 1);
      }
    }
  }

  public clearCart(): void {
    this._cart = [];
  }

  public getQuantityProductLineByIdProduct(id: string): number {
    const result = this._cart.find( cart => cart.product.id === id );

    if(result?.quantity === undefined) return 0;

    return result?.quantity;
  }
}
