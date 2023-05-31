import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { Usse } from '../interface/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL = 'http://localhost:8080/api'
  constructor(private http:HttpClient) { }
  
  signup(user: Usse ): Observable<Usse>{
    return this.http.post<Usse>(`${this.API_URL}/signup`,user)
  }
}
