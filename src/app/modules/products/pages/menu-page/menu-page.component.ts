import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Category } from 'src/app/core/enums';
import { Product } from 'src/app/core/models';
import { ProductsApiService } from 'src/app/core/services/json-server/products-api.service';

@Component({
  selector: 'products-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: [ './menu-page.component.css' ]
})
export class MenuPageComponent implements OnInit {

  constructor(private productsApiService: ProductsApiService) {}

  ngOnInit(): void {
    //antes
    // this.getProducts();

    //ahora
    this.getProductsByCategory(Category.Burguers);
    this.getProductsByCategory(Category.BurguerVeggies);
    this.getProductsByCategory(Category.Fries);
    this.getProductsByCategory(Category.Salads);
    this.getProductsByCategory(Category.SoftDrinks);
    this.getProductsByCategory(Category.Beers);
    this.getProductsByCategory(Category.Desserts);


  }
    //todos los productos
  public products: Product[] = [];
  //ahora
  public productsBurguers: Product[] = [];
  public productsBurguerVeggies: Product[] = [];
  public productsFries: Product[] = [];
  public productsSalads: Product[] = [];
  public productsSoftDrinks: Product[] = [];
  public productsBeers: Product[] = [];
  public productsDesserts: Product[] = [];

  public async getProducts() {
    try {
      let responseApi = this.productsApiService.getProducts();
      const data = await lastValueFrom(responseApi);

      this.products = data.map( (productData: any) => new Product(productData) );

    } catch (error) {
      console.log(error);
    }
  }

  public async getProductsByCategory(category : Category) {
    console.log(category);
    try {
      let responseApi = this.productsApiService.getProductsByCategory(category);
      const data = await lastValueFrom(responseApi);

      switch(category){
        case Category.Burguers:
          this.productsBurguers = data.map( (productData: any) => new Product(productData) );
          break;
        case Category.BurguerVeggies:
          this.productsBurguerVeggies = data.map( (productData: any) => new Product(productData) );
          break;
        case Category.Fries:
          this.productsFries = data.map( (productData: any) => new Product(productData) );
          break;
        case Category.Salads:
          this.productsSalads = data.map( (productData: any) => new Product(productData) );
          break;
        case Category.SoftDrinks:
          this.productsSoftDrinks = data.map( (productData: any) => new Product(productData) );
          break;
        case Category.Beers:
          this.productsBeers = data.map( (productData: any) => new Product(productData) );
          break;
        case Category.Desserts:
          this.productsDesserts = data.map( (productData: any) => new Product(productData) );
          break;
      }

    } catch (error) {
      console.log(error);
    }
  }




}
