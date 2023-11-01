import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Product } from '../../models';
import { Category } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  public baseURL: string = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseURL}`);
  }

  public addProduct(product: Product): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseURL}`, product);
  }

  public deleteProduct(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseURL}${id}`)
    .pipe(
      map( resp => true ),  // Si sale bien retorna true. Recibir un response significa que salio bien
      catchError( error => of(false)) // Si hay algun error en la solicitud me regresa falso
    );
  }

  public updateProduct(product: Product): Observable<boolean> {
    return this.http.patch<boolean>(`${this.baseURL}/${product.id}`, product);
  }

  public getProductsByCategory(category: Category): Observable<Product[]> {
    console.log(category);
    return this.http.get<Product[]>(`${this.baseURL}?category=${category}`);
  }
}
