import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-ext-gold-api',
  templateUrl: './ext-gold-api.component.html',
  styleUrls: ['./ext-gold-api.component.scss']
})
export class ExtGoldApiComponent {
  constructor(private http: HttpClient) { }
  
  // Http Options
    httpOptions = {
    headers: new HttpHeaders({
      'x-access-token': 'goldapi-6zj7tl7y20q10-io',
      'Content-Type':'application/json'
    })
    }
    
    prices: any = [];
    url: string = 'https://www.goldapi.io/api/XAU/USD/?'
  
    getGoldprices(){
      this.http.get(this.url,this.httpOptions).subscribe((prices: any)=>{
        this.prices = prices;
        this.prices = Array.of(this.prices);
        console.log(prices);
      });
    }
  
    getSilverprices(){
      this.http.get('https://www.goldapi.io/api/XAG/USD/?',this.httpOptions).subscribe((prices: any)=>{
        this.prices = prices;
        this.prices = Array.of(this.prices);
        console.log(prices);
      });
    }

}
