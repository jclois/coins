import { Injectable } from '@angular/core';
import { Coin } from './coins';
import { COINS } from './mock-coins';
import { Observable, of } from 'rxjs';
import { MessageService} from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private coinsUrl = 'api/coins';  // URL to web api

  //getCoins(): Observable<Coin[]> {
  //  this.messageService.add(`CoinService: Fetched Coins`);
  //  return of(COINS);
  // }

  /** GET heroes from the server */
  getCoins(): Observable<Coin[]> {
  return this.http.get<Coin[]>(this.coinsUrl)
  .pipe(
    catchError(this.handleError<Coin[]>('getCoins', []))
  );
  }

  getCoin(id: number): Observable<Coin> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const coin = COINS.find(h => h.id === id)!;
    this.messageService.add(`CoinService: fetched coin id=${id}`);
    return of(coin);
  }

  /** Log a CoinService message with the MessageService */
  private log(message: string) {
  this.messageService.add(`CoinService: ${message}`);
}

/**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
 private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
