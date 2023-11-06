import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shared-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  @Output()
  public onCounter: EventEmitter<number> = new EventEmitter();

  public productCounter: number = 0;


  public decreaseCounter(): void {
    if (this.productCounter === 0) return;
    this.productCounter--;
    this.counterEmitter();
  }

  public increaseCounter(): void {
    this.productCounter++;
    this.counterEmitter();
  }

  public counterEmitter(): void {
    this.onCounter.emit(this.productCounter);
  }
}
