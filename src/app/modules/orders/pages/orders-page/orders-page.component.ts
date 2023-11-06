import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Category } from 'src/app/core/interfaces';
import { Product } from 'src/app/core/models';
import { ProductsApiService } from 'src/app/core/services/json-server/products-api.service';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.css']
})
export class OrdersPageComponent implements OnInit{

  public orders: Product[] = [];

  constructor(private productsApiService: ProductsApiService){}
  ngOnInit(): void {
    this.getProducts();
  }




  //*pruebo con productos, pero en realidad tendria q tener un metodo get para traer pedidos

  public async getProducts() {
    try {
      let responseApi = this.productsApiService.getProductsByCategory(Category.Burguers);
      const data = await lastValueFrom(responseApi);

      this.orders = data.map( (productData: any) => new Product(productData) );

    } catch (error) {
      console.log(error);
    }
  }


  //*realizar metodo para traer los productos q se encuentran en el pedido, Class: ProductInCart

}
