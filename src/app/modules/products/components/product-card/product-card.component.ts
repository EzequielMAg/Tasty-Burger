import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/core/interfaces';
import { Product } from 'src/app/core/models';

@Component({
  selector: 'product-card',

  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent{

  @Input()
  public product: Product = new Product(
    {id:'0'}
  );



}
