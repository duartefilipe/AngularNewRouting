import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { responseUsers, ResponseCreate, RequestCreate, responseUser, RequestUpdate, ResponseUpdate } from './user.model';
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

  getUser(id: string): Observable<responseUser>{
    const _url = `${this.url}/${id}`;
    return this.http.get<responseUser>(_url);
  }

  updateUser(id: string, request: RequestUpdate): Observable<ResponseUpdate>{
    const _url = `${this.url}/${id}`;
    return this.http.put<ResponseUpdate>(_url, request);
  }
}
