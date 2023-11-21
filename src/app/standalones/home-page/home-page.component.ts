import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'standalone-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],

  standalone: true,
  imports: [
    HeroComponent
  ]
})
export class HomePageComponent {

}
