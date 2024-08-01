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

  getItems(category: number): Observable<any> {
    return this.httpClient.post("http://localhost:3000/api/courses", category);
  }
}
