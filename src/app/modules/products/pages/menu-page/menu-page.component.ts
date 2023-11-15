import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'products-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: [ './menu-page.component.css' ]
})
export class MenuPageComponent implements OnInit {

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {

    if(!this.productService.loadedProducts)
      this.productService.getProducts();
  }

  //#region GETTERS
  get productsBurguers(): Product[] {
    return this.productService.productsBurguers;
  }

  get productsBurguerVeggies(): Product[] {
    return this.productService.productsBurguerVeggies;
  }

  get productsFries(): Product[] {
    return this.productService.productsFries;
  }

  get productsSalads(): Product[] {
    return this.productService.productsSalads;
  }

  get productsSoftDrinks(): Product[] {
    return this.productService.productsSoftDrinks;
  }

  get productsBeers(): Product[] {
    return this.productService.productsBeers;
  }

  get productsDesserts(): Product[] {
    return this.productService.productsDesserts;
  }
  //#endregion

}
