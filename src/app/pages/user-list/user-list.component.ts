import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public userList: User[] = [];
  public isNewUserActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.getUserList();
  }

  private getUserList(): void {
    // Llamada magica a API - Backend
    this.userList = [
      {
        name: 'Mario',
        age: 30
      },
      {
        name: 'Laura',
        age: 24
      },
      {
        name: 'Jose',
        age: 33
      },
      {
        name: 'María',
        age: 29
      }
    ];
  }

  public viewNewUser(): void {
    this.isNewUserActive = true;
  }

  public back(): void {
    this.isNewUserActive = false;
  }

  public handleUser(user: User): void {
    this.userList.push(user);
    this.isNewUserActive = false;
  }

  public deleteUser(user: User): void {
    const index = this.userList.findIndex((item) => item.name === user.name);
    this.userList.splice(index, 1);
  }

}
