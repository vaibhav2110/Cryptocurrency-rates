import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CoinServiceService } from './services/coin-service.service';
import { Coins, CoinDetail } from './models/coins';
import { TemplateRef } from '@angular/core';
import {Observable} from 'rxjs/Observable'; 
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/timer';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public modalRef: BsModalRef;
  start: number;
  errMsg: string;
  coins: Coins[];
  coinDetail: CoinDetail;
  constructor(private modalService: BsModalService,
               private spinnerService: Ng4LoadingSpinnerService,
              private coinService: CoinServiceService) {} // {2}
  
  ngOnInit() {
    this.spinnerService.show();
    let timer = Observable.timer(0, 300000);
    timer.subscribe((t) => this.onTimeOut());
}
    onTimeOut(){
        this.coinService.getCoins()
       .subscribe(coins => {
        this.coins = coins;
        console.log(this.coins);
        this.spinnerService.hide();
    },
        errmess => {this.errMsg = <any>errmess;
                   this.spinnerService.hide();} );
    }
    
  public openModal(template: TemplateRef<any>, id: string) {
      this.spinnerService.show();
    this.coinService.getCoinDetails(id)
      .subscribe(coin => {
        this.coinDetail = coin;
        this.spinnerService.hide();
        console.log(this.coinDetail);
    },
        errmess => {this.errMsg = <any>errmess;
                   this.spinnerService.hide();} );
      
    this.modalRef = this.modalService.show(template); // {3}
  }
    
  onScroll(){
      this.coinService.getMoreCoins(this.start)
      .subscribe(coins => {
          for(let coin of coins){
              this.coins = this.coins.concat([coin]);
          }
          console.log(this.coins);
          this.start += 500;
      },
        errmess => this.errMsg = <any>errmess );
  }
}
