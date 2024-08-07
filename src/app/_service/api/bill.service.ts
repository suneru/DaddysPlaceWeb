import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})

export class BillService {
  private api: string = `${environment.apiUrl}api/Bill/NextOrderNo`;

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getNewOrderNoData(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.api);
  }

}
