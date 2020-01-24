import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { responseUsers } from './user.model';
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
}
