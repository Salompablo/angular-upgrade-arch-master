import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  // Inputs/Outputs
  @Output() sendUser = new EventEmitter<User>();

  // Attributes
  public user: User;

  constructor() { }

  ngOnInit(): void {
    this.user = {
      name: '',
      age: 0
    };
  }

  public saveUsername(value: string): void {
    this.user.name = value;
  }

  public createUser(): void {
    this.sendUser.emit(this.user);
  }

}
