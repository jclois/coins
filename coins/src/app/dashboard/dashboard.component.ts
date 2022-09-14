import { Component, OnInit } from '@angular/core';
import { Coin } from '../coins';
import { COINS } from '../mock-coins';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  coins: Coin[] = [];

  constructor(private coinService: CoinService) { }

  ngOnInit(): void {
    this.getCoins();
  }

  getCoins(): void {
    this.coinService.getCoins().subscribe(coins => this.coins = coins.slice(1, 5));
  }
}