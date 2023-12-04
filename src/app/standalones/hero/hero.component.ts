import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'standalone-hero',
  templateUrl: './hero.component.html',
  styleUrls: [ './hero.component.css'],

  standalone: true,
  imports: [
    RouterModule
  ]

})
export class HeroComponent {

}
