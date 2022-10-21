import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoinsComponent } from './coins/coins.component';
import { CoinDetailsComponent } from './coin-details/coin-details.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';
import { CoinSearchComponent } from './coin-search/coin-search.component';
import { ExtGoldApiComponent } from './ext-gold-api/ext-gold-api.component';

@NgModule({
  declarations: [
    AppComponent,
    CoinsComponent,
    CoinDetailsComponent,
    MessagesComponent,
    DashboardComponent,
    CoinSearchComponent,
    ExtGoldApiComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    //HttpClientInMemoryWebApiModule.forRoot(
    //InMemoryDataService, { dataEncapsulation: false }
)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
