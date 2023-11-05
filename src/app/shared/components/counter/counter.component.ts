import { Component } from '@angular/core';

@Component({
  selector: 'shared-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  public productCounter: number = 0;

  public decreaseCounter(): void {
    this.productCounter--;
  }

  public increaseCounter() : void {
    this.productCounter++;
  }

}
