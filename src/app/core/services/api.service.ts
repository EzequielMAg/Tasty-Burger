import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Product, User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseURL: string = "http://localhost:3000";

  public productsBaseURL: string = `${this.baseURL}/products`;
  public usersBaseURL: string = `${this.baseURL}/users`;

  constructor(private http: HttpClient) { }

  //! --------------  USERS  --------------
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.usersBaseURL}`);
  }

  public getUserToAuth(email: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.usersBaseURL}?email=${email}&password=${password}`);
  }

  //! --------------  PRODUCTS  --------------
  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.productsBaseURL}`);
  }

  public addProduct(product: Product): Observable<boolean> {
    return this.http.post<boolean>(`${this.productsBaseURL}`, product);
  }

  public deleteProduct(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.productsBaseURL}${id}`).pipe(

      map( resp => true ),  // Si sale bien retorna true. Recibir un response significa que salio bien
      catchError( error => of(false)) // Si hay algun error en la solicitud me regresa falso
    );
  }

  public updateProduct(product: Product): Observable<boolean> {
    return this.http.patch<boolean>(`${this.productsBaseURL}/${product.id}`, product);
  }
}
