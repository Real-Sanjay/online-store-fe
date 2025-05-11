import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostersService {
  apiUrl = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  getAllPosters() : Observable<any>{
    return this.http.get(`${this.apiUrl}/posters`);
  }

  getAllProducts(): Observable<any>{
    return this.http.get(`${this.apiUrl}/products`)
  }
}
