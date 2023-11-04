import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  /* @Input() */
  public userLoggedIn: boolean = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.userLoggedIn = this.authService.checkAuthentication();
  }

  public goToLogin() {
    this.router.navigate(["/auth/login"]);
  }

  public logOut() {
    this.authService.logOut();
    this.router.navigate(['']);
  }



}
