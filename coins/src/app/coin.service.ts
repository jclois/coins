import { Injectable } from '@angular/core';
import { Coin } from './coins';
import { COINS } from './mock-coins';
import { Observable, of } from 'rxjs';
import { MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private messageService: MessageService) { }

  getCoins(): Observable<Coin[]> {
    this.messageService.add(`CoinService: Fetched Coins`);
    return of(COINS);
  }

  getCoin(id: number): Observable<Coin> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const coin = COINS.find(h => h.id === id)!;
    this.messageService.add(`CoinService: fetched coin id=${id}`);
    return of(coin);
  }

}
