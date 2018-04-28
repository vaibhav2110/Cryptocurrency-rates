import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoinServiceService } from './services/coin-service.service';
import { ErrorHandlerService } from './services/error-handler.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [
      CoinServiceService,
      ErrorHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
