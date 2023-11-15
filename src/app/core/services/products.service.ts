import { Injectable } from '@angular/core';
import { Product } from '../models';
import { Category } from '../enums';
import { ProductsApiService } from './json-server/products-api.service';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _productsBurguers: Product[] = [];
  private _productsBurguerVeggies: Product[] = [];
  private _productsFries: Product[] = [];
  private _productsSalads: Product[] = [];
  private _productsSoftDrinks: Product[] = [];
  private _productsBeers: Product[] = [];
  private _productsDesserts: Product[] = [];

  private _loadedProducts: boolean = false;

  constructor(private productsApiService: ProductsApiService) { }

  //#region GETTERS
  get loadedProducts(): boolean {
    return this._loadedProducts;
  }

  get productsBurguers(): Product[] {
    return this._productsBurguers;
  }

  get productsBurguerVeggies(): Product[] {
    return this._productsBurguerVeggies;
  }

  get productsFries(): Product[] {
    return this._productsFries;
  }

  get productsSalads(): Product[] {
    return this._productsSalads;
  }

  get productsSoftDrinks(): Product[] {
    return this._productsSoftDrinks;
  }

  get productsBeers(): Product[] {
    return this._productsBeers;
  }

  get productsDesserts(): Product[] {
    return this._productsDesserts;
  }
  //#endregion

  public getProducts() {
    this.getProductsByCategory(Category.Burguers);
    this.getProductsByCategory(Category.BurguerVeggies);
    this.getProductsByCategory(Category.Fries);
    this.getProductsByCategory(Category.Salads);
    this.getProductsByCategory(Category.SoftDrinks);
    this.getProductsByCategory(Category.Beers);
    this.getProductsByCategory(Category.Desserts);

    this._loadedProducts = true;
  }

  public async getProductsByCategory(category : Category) {
    try {
      let responseApi = this.productsApiService.getProductsByCategory(category);
      const data = await lastValueFrom(responseApi);

      switch(category){
        case Category.Burguers:
          this._productsBurguers = data.map( (productData: any) => new Product(productData) );
          break;
        case Category.BurguerVeggies:
          this._productsBurguerVeggies = data.map( (productData: any) => new Product(productData) );
          break;
        case Category.Fries:
          this._productsFries = data.map( (productData: any) => new Product(productData) );
          break;
        case Category.Salads:
          this._productsSalads = data.map( (productData: any) => new Product(productData) );
          break;
        case Category.SoftDrinks:
          this._productsSoftDrinks = data.map( (productData: any) => new Product(productData) );
          break;
        case Category.Beers:
          this._productsBeers = data.map( (productData: any) => new Product(productData) );
          break;
        case Category.Desserts:
          this._productsDesserts = data.map( (productData: any) => new Product(productData) );
          break;
      }

    } catch (error) {
      console.log(error);
    }
  }

  public getProductById(idProduct: string):Product | undefined {

    let product: Product | undefined;

    //Recorrer todos los arreglos hasta encontrar el producto
    product = this._productsBurguers.find((p) => p.id === idProduct);
    if (product) {
      return product;
    }

    product = this._productsBurguerVeggies.find((p) => p.id === idProduct);
    if (product) return product;

    product = this._productsFries.find((p) => p.id === idProduct);
    if (product) return product;

    product = this._productsSalads.find((p) => p.id === idProduct);
    if (product) return product;

    product = this._productsSoftDrinks.find((p) => p.id === idProduct);
    if (product) return product;

    product = this._productsBeers.find((p) => p.id === idProduct);
    if (product) return product;

    product = this._productsDesserts.find((p) => p.id === idProduct);
    if (product) return product;

    return product;
  }
}
