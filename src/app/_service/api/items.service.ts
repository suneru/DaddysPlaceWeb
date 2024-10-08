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

  add(cart: any): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}api/Item/Add`,cart);
  }
}
