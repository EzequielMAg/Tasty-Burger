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

  public updateProductInCart(productLine: ProductInCart): void {

    /* console.log(productLine); */
    //TODO: validar que el producto ya esta en el carrito y solamente actualizar su cantidad...
    // Busca si el productLine ya está en el _productLineArray
    const productoExistente = this._productLineArray.find(product => product.id === productLine.id);
    console.log(productoExistente);

    if (productoExistente) {
      // Si el productLine ya existe, modifica su atributo quantity
      productoExistente.quantity = productLine.quantity;
    } else {
      // Si el productLine no existe, agrégalo al final del arreglo.
      this._productLineArray.push(productLine);
    }

    /* console.log(this._productLineArray); */
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this._productLineArray)); //JSON.stringify: convierte un objeto en string
  }


}
