import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../services/cards.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.sass'],
  providers: [CardsService]
})
export class TransactionsComponent implements OnInit {
  accountId;
  transactions;
  
  constructor(
    private cardsService: CardsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.accountId = this.route.snapshot.paramMap.get('id');
  }
  transactionsFilter(){
    let data = {
      //from: this.dateFrom
      // to: dateTo.value
    }
    console.log(data)
    this.cardsService.transactionsFilter(data, this.accountId)
    .subscribe (res =>{
      this.transactions = res;
    })
  }
}
