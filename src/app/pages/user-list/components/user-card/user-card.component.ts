import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user!: User;
  @Output() sendDelete = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  public handleDelete(): void {
    this.sendDelete.emit(this.user);
  }

}
