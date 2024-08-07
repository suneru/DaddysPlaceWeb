import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private httpClient: HttpClient
  ) { }

  add(payment: any): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}api/Payment/add`, payment);
  }
}
