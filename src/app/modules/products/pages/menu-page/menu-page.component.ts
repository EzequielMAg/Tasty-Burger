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

  public productsBurguers: Product[] = [];
  public productsBurguerVeggies: Product[] = [];
  public productsFries: Product[] = [];
  public productsSalads: Product[] = [];
  public productsSoftDrinks: Product[] = [];
  public productsBeers: Product[] = [];
  public productsDesserts: Product[] = [];

  private loadedProducts: boolean = false;

  constructor(private productsApiService: ProductsApiService) {}

  ngOnInit(): void {

    if(!this.loadedProducts)
      this.getProducts();
  }

  public async getProducts() {
    this.getProductsByCategory(Category.Burguers);
    this.getProductsByCategory(Category.BurguerVeggies);
    this.getProductsByCategory(Category.Fries);
    this.getProductsByCategory(Category.Salads);
    this.getProductsByCategory(Category.SoftDrinks);
    this.getProductsByCategory(Category.Beers);
    this.getProductsByCategory(Category.Desserts);

    this.loadedProducts = true;
  }

  public async getProductsByCategory(category : Category) {
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
