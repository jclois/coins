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
}
