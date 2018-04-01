import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { EmailvalidatorDirective } from '../../../services/emailvalidator.directive'
import { CardsService } from '../../../services/cards.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-users-item',
  templateUrl: './users-item.component.html',
  styleUrls: ['./users-item.component.sass'],
  providers: [CardsService, UserService]
})
export class UsersItemComponent implements OnInit {
@Input() user;
@Output() delete = new EventEmitter();
cards;


  constructor(
  private cardsService: CardsService,
  private userService: UserService) { }

  ngOnInit() {
    this.getCards(this.user);
  }

 


  private getCards(user) {
    this.cardsService.getCards(user.id)
    .subscribe(res => {
      this.cards = res;
    });
  }

 

  deleteUser(){
    console.log(this.user.id)
    this.userService.deleteUser(this.user.id)
    .subscribe(res =>{
      this.delete.emit(this.user.id)
    })
  }

}
