import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { responseUsers, ResponseCreate, RequestCreate } from './user.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<responseUsers>{
    return this.http.get<responseUsers>(this.url);
  }

  CreateUser(request: RequestCreate): Observable<ResponseCreate>{
    return this.http.post<ResponseCreate>(this.url, request);
  }
}
