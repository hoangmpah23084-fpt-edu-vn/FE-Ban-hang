import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interface/product';
import { ICategory } from '../interface/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }





  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`http://localhost:8080/api/products`, product)

  }

  getCategory(): Observable<ICategory> {
    return this.http.get<ICategory>(`http://localhost:8080/api/categorys`)
  }

  uploadImage(vals: any): Observable<any> {
    {
      let data = vals;
      return this.http.post(`https://api.cloudinary.com/v1_1/doa7mkkpq/image/upload`, data)
    }
  }

}
