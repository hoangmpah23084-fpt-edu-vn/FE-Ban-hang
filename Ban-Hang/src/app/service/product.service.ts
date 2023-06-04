import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interface/product';
import { ICategory } from '../interface/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API = 'http://localhost:8080/api';
  token = localStorage.getItem('token')
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    }),
  }

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    const url = `${this.API}/products`;
    return this.http.get<IProduct[]>(url, this.httpOptions)
  }
  getProduct(id: string): Observable<IProduct> {
    const url = `${this.API}/products/${id}`;
    return this.http.get<IProduct>(url, this.httpOptions)
  }
  addProduct(product: IProduct): Observable<IProduct> {
    const url = `${this.API}/products`;
    return this.http.post<IProduct>(url, product, this.httpOptions)

  }
  updateProduct(product: IProduct): Observable<IProduct> {
    const url = `${this.API}/products/${product._id}`;
    return this.http.patch<IProduct>(url, product, this.httpOptions);
  }

  deleteProduct(id: number): Observable<IProduct> {
    const url = `${this.API}/products/${id}`;
    return this.http.delete<IProduct>(url, this.httpOptions)
  }

  getCategory(): Observable<ICategory> {
    const url = `${this.API}/categorys`;
    return this.http.get<ICategory>(url, this.httpOptions)
  }

  uploadImage(vals: any): Observable<any> {
    {
      let data = vals;
      return this.http.post(`https://api.cloudinary.com/v1_1/doa7mkkpq/image/upload`, data)
    }
  }

}
