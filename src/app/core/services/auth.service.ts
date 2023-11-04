import { Injectable } from '@angular/core';
import { User } from '../models';
import { UsersApiService } from './json-server/users-api.service';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User | undefined;
  public userLoggedIn: boolean = false;

  constructor(private usersApiService: UsersApiService) { }

  get currentUser(): User | undefined {
    if (!this.user) return undefined;

    return structuredClone(this.user)
  }

  public async login(email: string, password: string): Promise<boolean> {

    this.userLoggedIn = false;

    try {
      let apiResponse: Observable<User[]> = this.usersApiService.getUserToAuth(email, password);

      let userResponse: User[] = await lastValueFrom(apiResponse);

      this.user = userResponse[0];

      if (this.user) {

        localStorage.setItem('token', this.user.id.toString());
        this.userLoggedIn = true;
      }
    } catch (error) {
      throw error;
    }

    return this.userLoggedIn;
  }

  public logOut(): void {
    this.user = undefined;
    this.userLoggedIn = false;
    localStorage.clear();
  }

  public checkAuthentication(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

}
