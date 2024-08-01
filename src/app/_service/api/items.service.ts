import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getItems(categoryId: number): Observable<any> {
    return this.httpClient.get("http://localhost:5062/api/Items/GetCategoryWiseProductItem?" + categoryId);
  }
}
