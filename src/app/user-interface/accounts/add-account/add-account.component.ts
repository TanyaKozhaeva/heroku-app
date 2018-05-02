import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../../services/accounts.service';
import { Account } from './account';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../../alert/alert.service';
import { ConfirmService } from '../../../services/confirm.service';
import { AddAccountService } from '../../../services/addaccount.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.sass'],
  providers: [AccountsService
  ]
})
export class AddAccountComponent implements OnInit {
accountModel = new Account();
userId;
products;

numberMask: any[] = [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/,'-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
currencyMask = createNumberMask({ prefix: '', suffix: '', thousandsSeparatorSymbol: '.', allowDecimal: true, decimalSymbol: ',' })
  constructor(
    private accountsService: AccountsService,
    private route: ActivatedRoute,
    private router: Router,
    private addAccountService: AddAccountService,
    private alertService: AlertService,
    private confirmService: ConfirmService
  ) {}


  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    //this.cardModel = new Card(this.currentUser.id);
    this.getProducts()
    //this.accountModel.currency = "USD";
    //console.log(this.products[0].currency)
   }
   private getProducts(){
    this.accountsService.getProducts()
    .subscribe(res => {
      this.products = res;
      this.accountModel.currency = this.products[2].currency
    });
}

   addAccount(){
    // this.cardModel.userId = this.userId;
    console.log(this.accountModel)
     this.accountsService.addAccount(this.accountModel)
     .subscribe(res => {
      this.addAccountService.executeAction(res);
      this.alertService.success("Account successfully added!", false);

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

    if(!this.accountModel){
      console.log(this.accountModel)
      return true
    }
    return this.confirmService.confirm('Discard changes for Account?');

  }



}
