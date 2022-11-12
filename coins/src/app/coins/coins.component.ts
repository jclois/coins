import { Component, OnInit } from '@angular/core';
import { Coin } from '../coins';
import { COINS } from '../mock-coins';
import { CoinService } from '../coin.service';
import { Observable } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent implements OnInit {

  coins: Coin[];
  //coins: Observable<Coin[]>;
  selectedCoin: Coin;

  constructor(private coinService: CoinService) { }

  ngOnInit(): void {
    this.getCoins();
  }

 getCoins(): void {
  this.coinService.getCoins().subscribe(coins => this.coins = coins);
 }

 // getCoins(): void {
 //   this.coinService.getCoins().subscribe(result => this.coins = result);
 // }

  onSelect(coin: Coin){
    this.selectedCoin = coin;
    console.log(this.selectedCoin);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.coinService.addCoin({ name } as Coin)
      .subscribe(coin => {
        this.coins.push(coin);
      });
  }

  delete(coin: Coin): void {
    this.coins = this.coins.filter(h => h !== coin);
    this.coinService.deleteCoin(coin.id).subscribe();
  }

}
