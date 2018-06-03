import { Component, OnInit,  ViewChild } from '@angular/core';
import { Card } from '../add-card/card';
import { CardsService } from '../../services/cards.service';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlertService } from '../../alert/alert.service';
import { ConfirmService } from '../../services/confirm.service';
import { NgForm } from '@angular/forms';
import { LoaderService } from '../../loader/loader.service';


@Component({
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.sass']
})


export class AddCardComponent implements OnInit {

@ViewChild('addCardForm') public addCardForm: NgForm;
numberMask: any[] = [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/,'-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
expiredMask: any[] = [/\d/, /\d/, '/', /\d/, /\d/]
accountId;
cardModel = new Card();

  constructor(
    private loaderService: LoaderService,
    private cardsService: CardsService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private confirmService: ConfirmService
  ) { 
    this.accountId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
   }


   addCard(){
     console.log(this.cardModel)
    this.loaderService.executeAction(true);
     this.cardsService.addCard(this.cardModel, this.accountId)
     .subscribe(res => {
       console.log(res)
      this.addCardForm.reset();
      this.loaderService.executeAction(false);
      this.alertService.success("Card successfully added!", true);
     },
     error => {
      console.log(error)
      this.loaderService.executeAction(false);
      this.alertService.error("Something went wrong. Please try again later");
    })
     }

     cansel(){
       this.router.navigate(['/user']);
     }


canDeactivate(): Observable<boolean> | boolean {

  if(this.addCardForm.pristine){
    return true;
  }

  this.confirmService.message('Discard changes for Card?');
  return this.confirmService.navigateAwaySelection$;



}
}
