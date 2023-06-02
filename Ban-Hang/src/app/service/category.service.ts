import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory } from '../interface/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  categoryAdd(category: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(`http://localhost:8080/api/categorys`, category)
  }

  categoryUpdate(category: ICategory): Observable<ICategory> {
    return this.http.patch<ICategory>(`http://localhost:8080/api/categorys/${category.id}`, category)
  }
  getCategory(id: string | null): Observable<ICategory> {
    return this.http.get<ICategory>(`http://localhost:8080/api/categorys/${id}`)
  }

}
