import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CoinServiceService } from './services/coin-service.service';
import { Coins, CoinDetail } from './models/coins';
import { TemplateRef } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public modalRef: BsModalRef;
  errMsg: string;
  coins: Coins[];
  coinDetail: CoinDetail;
  constructor(private modalService: BsModalService,
              private coinService: CoinServiceService) {} // {2}
  
  ngOnInit() {
    this.coinService.getCoins()
       .subscribe(coins => {
        this.coins = coins;
        console.log(this.coins);
    },
        errmess => this.errMsg = <any>errmess );

}
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
  }
}
