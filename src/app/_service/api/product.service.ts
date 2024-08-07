import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private api: string = `${environment.apiUrl}api/Product/ListAdvanceALL`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getProductData(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.api);
  }

  getItems(categoryId: number): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}api/Product/GetCategoryWiseProductItem/${categoryId}`);
  }
}
