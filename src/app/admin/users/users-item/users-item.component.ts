import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-item',
  templateUrl: './users-item.component.html',
  styleUrls: ['./users-item.component.sass']
})
export class UsersItemComponent implements OnInit {
@Input() user;

  constructor() { }

  ngOnInit() {
  }

}
