import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentTypeService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPaymentTypes(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}api/PaymentType`);
  }
}
