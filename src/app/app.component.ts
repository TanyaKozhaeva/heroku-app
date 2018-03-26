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

  getReport(){
    this.userService.getReport()
    //.subscribe(
     // (res) => {
         // saveAs(res, "myPDF.pdf"); //if you want to save it - you need file-saver for this : https://www.npmjs.com/package/file-saver

     // var fileURL = URL.createObjectURL(res);
      //window.open(fileURL); // if you want to open it in new tab

      //}
  //);
  }
}
