import { Injectable } from '@angular/core';
import { Coin } from '../coins';
import { COINS } from '../mock-coins';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor() { }

  getCoins(): Coin[] {
    return COINS;
  }
}
