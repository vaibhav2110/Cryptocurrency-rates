import { Injectable } from '@angular/core';
import { Coins, CoinDetail } from '../models/coins';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorHandlerService } from './error-handler.service';
import 'rxjs/add/operator/catch';

@Injectable()
export class CoinServiceService {

  constructor(private http: HttpClient,
    private errorHandler: ErrorHandlerService) { }
    
  getCoins(): Observable<Coins[]> {
      return this.http.get("https://api.coinmarketcap.com/v1/ticker/?limit=500")
      .catch(error => {
          return this.errorHandler.handleError(error);
      });
  }
    getMoreCoins(start: number): Observable<Coins[]> {
      return this.http.get("https://api.coinmarketcap.com/v1/ticker/?start="+start+"&limit=500")
      .catch(error => {
          return this.errorHandler.handleError(error);
      });
  }
  
    
    getCoinDetails(id: string): Observable<CoinDetail>{
        return this.http.get("https://api.coinmarketcap.com/v1/ticker/"+id+"/")
        .catch(error => {
          return this.errorHandler.handleError(error);
      });
    }

}
