import { Injectable } from '@angular/core';
import { ProductLine, Product, Cart } from '../models';
import { ProductsService } from './products.service';
import { AuthService } from './auth.service';
import { CartApiService } from './json-server/cart-api.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart: Cart = new Cart();

  //TODO: variable q indica si esta en la page cart o en el menupage, para que el carrito cambie de estilos
  //      y habilite para mostrarse cierto HTML.
  private _inPageCart: boolean = false;

  constructor(private productService: ProductsService,
              private authService: AuthService,
              private cartApiService: CartApiService) {

    this.loadCartFromLocalStorage();

  }

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

    // Busca si el productLine ya está en el _cart
    const existingProductLine: ProductLine | undefined = this.findProductInCart(newProductInCart);

    if (existingProductLine) {

      ( newProductInCart.quantity === 0 ) ?
        this.deleteProductLineFromCart(existingProductLine) :
        existingProductLine.quantity = newProductInCart.quantity;

    } else {
      // Si el productLine no existe, se agrega al final del arreglo.
      this._cart.productLineArray.push(newProductInCart);
    }

    // Actualiza el total a pagar
    this._cart.totalToPay = this.calculateTotalToPay();

    (this._cart.productLineArray.length === 0) ?
      this.clearCart() :
      this.saveCart();
  }

  private saveCart(): void {
    this.saveCartLocalStorage();

    if(!this.authService.checkAuthentication()) return;
    this.saveCartJson();
  }

  private saveCartLocalStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this._cart)); //JSON.stringify: convierte un objeto en string
  }

  public saveCartJson(): void {

    this.cartApiService.updateCart(this.authService.currentUser!, this._cart).subscribe({

      next: () => console.log("CARRITO GUARDADO CON EXITO"),
      error: (error) => console.log(error)
    });
  }


  public clearCart(): void {
    this._cart.totalToPay = 0;
    this._cart.productLineArray.splice(0, this._cart.productLineArray.length);

    this.clearCartLocalStorage();
    this.clearCartJson();
  }

  public clearCartLocalStorage(): void {
    localStorage.removeItem('cart');
  }

  private clearCartJson(): void {
    this.saveCartJson();
  }

  private findProductInCart(productLine: ProductLine): ProductLine | undefined {
    return this._cart.productLineArray.find( productInCart => productInCart.idProduct === productLine.idProduct );
  }

  private deleteProductLineFromCart(productLine: ProductLine): void {

    if (productLine) {
      const index: number = this._cart.productLineArray.indexOf(productLine);

      if (index !== -1) {
        this._cart.productLineArray.splice(index, 1);
      }
    }
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

  public checkCartInLocalStorage(): boolean {
    return localStorage.getItem('cart') ? true : false;
  }

  public loadCartFromLocalStorage(): void {

    if(!this.checkCartInLocalStorage()) return;

    //Si pasa para acam hay productos agregados al carrito en el local storage
    this._cart = JSON.parse( localStorage.getItem('cart')! );

  }


}
