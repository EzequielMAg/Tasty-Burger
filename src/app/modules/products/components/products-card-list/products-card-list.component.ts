import { Component } from '@angular/core';
import { Category } from 'src/app/core/interfaces';
import { Product } from 'src/app/core/models';

@Component({
  selector: 'products-card-list',
  templateUrl: './products-card-list.component.html',
  styleUrls: ['./products-card-list.component.css']
})
export class ProductCardListComponent {

  public products: Product[] = [{
    id: '0123',
    name: "Candy",
    price: 4200,
    description: 'Medallon 120gr (blend secreto), cheddar x4, bacon ahumado, alioli de berenjena ahumada, pepinillos',
    category: Category.Burguers,
    urlImage: 'https://firebasestorage.googleapis.com/v0/b/dondepido-befab.appspot.com/o/aMAevv6mArmDRUywEStq%2Fproducts%2Fc05518c7-e67c-4003-be76-6e1d4814715a?alt=media'
   },
   {
    id: "0dcgf",
    name: "Candy",
    price: 4200,
    description: 'Medallon 120gr (blend secreto), cheddar x4, bacon ahumado, alioli de berenjena ahumada, pepinillos',
    category: Category.Burguers,
    urlImage: 'https://firebasestorage.googleapis.com/v0/b/dondepido-befab.appspot.com/o/aMAevv6mArmDRUywEStq%2Fproducts%2Fc05518c7-e67c-4003-be76-6e1d4814715a?alt=media'
   },
   {
    id: "0dcgf",
    name: "Candy",
    price: 4200,
    description: 'Medallon 120gr (blend secreto), cheddar x4, bacon ahumado, alioli de berenjena ahumada, pepinillos',
    category: Category.Burguers,
    urlImage: 'https://firebasestorage.googleapis.com/v0/b/dondepido-befab.appspot.com/o/aMAevv6mArmDRUywEStq%2Fproducts%2Fc05518c7-e67c-4003-be76-6e1d4814715a?alt=media'
   },
   {
    id: "0dcgf",
    name: "Candy",
    price: 4200,
    description: 'Medallon 120gr (blend secreto), cheddar x4, bacon ahumado, alioli de berenjena ahumada, pepinillos',
    category: Category.Burguers,
    urlImage: 'https://firebasestorage.googleapis.com/v0/b/dondepido-befab.appspot.com/o/aMAevv6mArmDRUywEStq%2Fproducts%2Fc05518c7-e67c-4003-be76-6e1d4814715a?alt=media'
   },
   {
    id: "0dcgf",
    name: "Candy",
    price: 4200,
    description: 'Medallon 120gr (blend secreto), cheddar x4, bacon ahumado, alioli de berenjena ahumada, pepinillos',
    category: Category.Burguers,
    urlImage: 'https://firebasestorage.googleapis.com/v0/b/dondepido-befab.appspot.com/o/aMAevv6mArmDRUywEStq%2Fproducts%2Fc05518c7-e67c-4003-be76-6e1d4814715a?alt=media'
   },
   {
    id: "0dcgf",
    name: "Candy",
    price: 4200,
    description: 'Medallon 120gr (blend secreto), cheddar x4, bacon ahumado, alioli de berenjena ahumada, pepinillos',
    category: Category.Burguers,
    urlImage: 'https://firebasestorage.googleapis.com/v0/b/dondepido-befab.appspot.com/o/aMAevv6mArmDRUywEStq%2Fproducts%2Fc05518c7-e67c-4003-be76-6e1d4814715a?alt=media'
   }];

   public prueba(){
    console.log(this.products);
   }


}
