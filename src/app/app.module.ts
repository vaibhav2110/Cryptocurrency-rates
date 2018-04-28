import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoinServiceService } from './services/coin-service.service';
import { ErrorHandlerService } from './services/error-handler.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule,
    ModalModule.forRoot()
  ],
  providers: [
      CoinServiceService,
      ErrorHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
