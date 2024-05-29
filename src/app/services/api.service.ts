import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseURL = 'https://fakestoreapi.com/products';

  constructor(private _httpClient: HttpClient) {}

  // devuelve un observable de productos
  public getAllProducts(): Observable<IProduct[]> {
    return this._httpClient.get<IProduct[]>(this.baseURL);
  }

  // devuelve un observable de un producto
  public getProduct(id: number): Observable<IProduct> {
    return this._httpClient.get<IProduct>(`${this.baseURL}/${id}`);
  }

  // devuelve un observable de categorias
  public getAllCategories(): Observable<Category[]> {
    return this._httpClient.get<Category[]>(`${this.baseURL}/categories`);
  }

  public newProduct(product: IProduct): Observable<IProduct> {
    return this._httpClient.post<IProduct>(`${this.baseURL}`, product);
  }

  public updateProduct(id: number, product: IProduct): Observable<IProduct> {
    return this._httpClient.put<IProduct>(`${this.baseURL}/${id}`, product);
  }

  public deleteProduct(id: number): Observable<IProduct> {
    return this._httpClient.delete<IProduct>(`${this.baseURL}/${id}`);
  }
}
