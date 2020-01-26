import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { responseUsers, ResponseCreate, RequestCreate, responseUser, RequestUpdate, ResponseUpdate } from './user.model';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "https://reqres.in/api/users";

  constructor(private http: HttpClient, private _route: Router) { }

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

  deleteUser(id: string): Observable<any>{
    const _url = `${this.url}/${id}`;
    return this.http.delete<ResponseUpdate>(_url);
  }
home(){
  this._route.navigate(['/']);
  }

}
