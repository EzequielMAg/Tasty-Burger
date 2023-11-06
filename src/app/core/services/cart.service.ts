import { Injectable } from '@angular/core';
import { ProductInCart } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // Va contener todos los productos del carrito c/u con su cantidad (objeto ProductInCart)
  private _productLineArray: ProductInCart[] = [];

  constructor() { }

  get productLineArray(): ProductInCart[] {
    return this._productLineArray;
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
      this._productLineArray.push(newProductLine);
    }

    /* console.log(this._productLineArray); */
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this._productLineArray)); //JSON.stringify: convierte un objeto en string
  }

  private findProductLine(productLine: ProductInCart): ProductInCart | undefined {
    return this._productLineArray.find( cart => cart.product.id === productLine.product.id );
  }

  private deleteProductLine(productLine: ProductInCart): void {

    if (productLine) {
      const index: number = this._productLineArray.indexOf(productLine);

      if (index !== -1) {
        this._productLineArray.splice(index, 1);
      }
    }
  }

}
