import { Component, ViewEncapsulation } from '@angular/core';
import { UserService } from './services/user.service';
import * as saveAs from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [UserService],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
  constructor(
    private userService: UserService) { }
}
