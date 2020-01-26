import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { responseUsers } from './user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  responseUsers: responseUsers;

  constructor(private userService: UserService, private _route: Router) { }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(res => this.responseUsers = res)
  }

  home(){
      this._route.navigate(['/']);
  }
}
