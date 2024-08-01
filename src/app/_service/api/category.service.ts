import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getCategories(): Observable<any> {
    return this.httpClient.get("http://localhost:5062/api/Category/GetCoutOfCategories");
  }
}
