import { Component, OnInit } from '@angular/core';
import { Coin } from '../coins';
import { COINS } from '../mock-coins';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent implements OnInit {

  coins = COINS;
  selectedCoin: Coin;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(coins: Coin){
    this.selectedCoin = coin;
    console.log(this.selectedCoin);
  }

}
