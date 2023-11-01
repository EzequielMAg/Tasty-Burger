import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input()
  public userLoggedIn: boolean = false;

  constructor(private router: Router) { }

  public logout(): void {

  }



}
