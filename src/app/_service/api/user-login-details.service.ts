import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class UserLoginDetailsService {
  private api: string = `${environment.apiUrl}api/User/ListAdvance`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getUserData(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.api);
  }

  editUser(userId: string, status: any): Observable<{ id: string }> {
    return this.httpClient.put<{ id: string }>(`${environment.apiUrl}api/User/Edit/${userId}`, status);
  }

  editUserRole(userId: string, role: any): Observable<{ id: string }> {
    return this.httpClient.put<{ id: string }>(`${environment.apiUrl}api/User/EditRole/${userId}`, role);
  }
 
}