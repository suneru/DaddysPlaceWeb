import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';


@Injectable({
  providedIn: 'root'
})
export class ReportServiceService {

  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getReportView(startDate: any,endDate: any): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}api/Report/ReportListAdvance/${startDate}/${endDate}`);
  }
}
