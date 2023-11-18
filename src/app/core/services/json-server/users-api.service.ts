import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  public baseURL: string = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}`);
  }

  public getUserToAuth(email: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}?email=${email}&password=${password}`);
  }

  public addUser(user : User): Observable<User>{
    return this.http.post<User>(`${this.baseURL}`, user)
  }

  public getUserByEmail(email: string): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseURL}?email=${email}`);
  }


  public getUserById(userId: string): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/${userId}`);
  }

  public updateAddress(user: User, address:string): Observable<Boolean> {
    user.address = address;
    return this.http.patch<Boolean>(`${this.baseURL}/${user.id}`, user);
  }

}
