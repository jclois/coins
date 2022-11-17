import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-coin-wishlist',
  templateUrl: './coin-wishlist.component.html',
  styleUrls: ['./coin-wishlist.component.scss']
})
export class CoinWishlistComponent implements OnInit {

  constructor(private http: HttpClient) { }
  
  // Http Options
    httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
    }
    
    wishlist: any = [];
    url: string = 'https://jlvw93gbmkmzd7i-db20220615222809.adb.us-ashburn-1.oraclecloudapps.com/ords/dev/xx_coins_wishlist/'
  
    getWishlist(){
      this.http.get(this.url,this.httpOptions).subscribe((wishlist: any)=>{
        this.wishlist = wishlist;
        //this.wishlist = Array.of(this.wishlist);
        console.log(wishlist);
      });
    }

  ngOnInit(): void {
  }

}
