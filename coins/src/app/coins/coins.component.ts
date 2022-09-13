import { Component, OnInit } from '@angular/core';
import { Coin } from '../coins';
import { COINS } from '../mock-coins';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent implements OnInit {

  coins = Coin[];
  selectedCoin: Coin;

  constructor(private coinService: CoinService) { }

  ngOnInit(): void {
    this.getCoins();
  }

  getCoins() {
    this.coins = this.coinService.getCoins();
  }

  onSelect(coin: Coin){
    this.selectedCoin = coin;
    console.log(this.selectedCoin);
  }

}
