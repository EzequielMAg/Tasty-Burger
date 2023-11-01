import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
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

    this.getProducts();
  }

  public products: Product[] = [];

  public async getProducts() {
    try {
      let responseApi = this.productsApiService.getProducts();
      const data = await lastValueFrom(responseApi);

      this.products = data.map( (productData: any) => new Product(productData) );

    } catch (error) {
      console.log(error);
    }
  }




}
