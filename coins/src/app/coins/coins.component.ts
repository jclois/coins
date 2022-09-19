import { Component, OnInit } from '@angular/core';
import { Coin } from '../coins';
import { COINS } from '../mock-coins';
import { CoinService } from '../coin.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent implements OnInit {

  coins: Coin[];
  //*coins: Observable<Coin[]>;
  selectedCoin: Coin;

  constructor(private coinService: CoinService) { }

  ngOnInit(): void {
    this.getCoins();
  }

  //*getCoins(): void {
   //* this.coinService.getCoins().subscribe(coins => this.coins = coins);
  //*}

  getCoins(): void {
    this.coinService.getCoins().subscribe(result => this.coins = result);
 }

  onSelect(coin: Coin){
    this.selectedCoin = coin;
    console.log(this.selectedCoin);
  }

}
