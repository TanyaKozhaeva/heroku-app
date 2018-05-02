import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Card } from '../add-card/card'
import { CardsService } from '../../../services/cards.service';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { AddCardService } from '../../../services/addcard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlertService } from '../../../alert/alert.service';
import { ConfirmService } from '../../../services/confirm.service';


@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.sass'],
  providers: [
    CardsService
    //AddCardService,
    ]
})


export class AddCardComponent implements OnInit {

//@Input() currentUser;
//currentUser = JSON.parse(localStorage.getItem('currentUser'));
//@Output() addingCard = new EventEmitter;////
numberMask: any[] = [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/,'-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
expiredMask: any[] = [/\d/, /\d/, '/', /\d/, /\d/]
userId;
cardModel = new Card();

/*cardModel = {
  userId: 'number'
};*/
  constructor(
    private cardsService: CardsService,
    private route: ActivatedRoute,
    private router: Router,
    private addCardService: AddCardService,
    private alertService: AlertService,
    private confirmService: ConfirmService
  ) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    //this.cardModel = new Card(this.currentUser.id);
   }


   addCard(){
    // this.cardModel.userId = this.userId;
    console.log(this.cardModel)
     this.cardsService.addCard(this.cardModel)
     .subscribe(res => {
      this.addCardService.executeAction(res);
      this.alertService.success("Card successfully added!", false);

     //this.addingCard.emit(res);////
     //this.addCardService.addingCard.emit("this.cardModel");
     },
     error => {
      this.alertService.error(error);
    })
     }

     cansel(){
       this.router.navigate(['user/cards']);
     }

  canDeactivate(): Observable<boolean> | boolean {

    if(!this.cardModel){
      console.log(this.cardModel)
      return true
    }
    return this.confirmService.confirm('Discard changes for Person?');

  }






}
