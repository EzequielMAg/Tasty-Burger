import { Component, Input } from '@angular/core';
import { Category } from 'src/app/core/enums';
import { Product } from 'src/app/core/models';

@Component({
  selector: 'products-card-list',
  templateUrl: './products-card-list.component.html',
  styleUrls: ['./products-card-list.component.css']
})
export class ProductCardListComponent {

  @Input()
  public products: Product[] = [];

  public category: Category = Category.Beers;


  public categoria(){

  }

  //*tengo q traer todos los productos y aca asignarols a una lista correspondiente?
  //*o tengo q tener varios input con un atributo productsdeXcategoria
  //*y entonces en el html tengo q tener un for por cada lista de productos de x categoria

}
