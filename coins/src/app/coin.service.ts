import { Injectable } from '@angular/core';
import { Coin } from './coins';
import { COINS } from './mock-coins';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor() { }

  getCoins(): Observable<Coin[]> {
    return if(COINS);
  }
}
