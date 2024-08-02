import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getCategories(): Observable<any> {
        return this.httpClient.get(`${environment.apiUrl}api/Category/GetCoutOfCategories`);
  }
}
