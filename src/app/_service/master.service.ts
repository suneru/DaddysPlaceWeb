import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { posts } from '../../_model/posts';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  getAll()
    {
      return this.http.get<posts>('http://localhost:3000/posts');
    }
  
}
