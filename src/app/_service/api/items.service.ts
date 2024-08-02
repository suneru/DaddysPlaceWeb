import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getItems(categoryId: number): Observable<any> {
    
    return this.httpClient.get(`${environment.apiUrl}api/Product/GetCategoryWiseProductItem/${categoryId}`);
  }
}
